import threading
import queue
import numpy as np
import pyaudio
import requests
import time
import os
import argparse
import wave

DO_NOT_APPLY_GAIN = 1.0

bytes_per_sample = 2
channels = 1
sample_rate = 44100
duration_in_seconds = 60
target_bytes = sample_rate * duration_in_seconds * bytes_per_sample * channels
audio_gain = DO_NOT_APPLY_GAIN
save_to_local_file = False

class SafeQueue:
    def __init__(self):
        self.queue = queue.Queue()

    def push(self, value):
        self.queue.put(value)

    def pop(self):
        return self.queue.get()

    def empty(self):
        return self.queue.empty()

audio_queue = SafeQueue()

def record_audio(audio, stream, chunk_size):
    while True:
        data = stream.read(chunk_size)
        audio_queue.push(data)

def create_wav_header(bits_per_sample, data_size):
    header = bytearray()
    header.extend(b'RIFF')
    chunk_size = 36 + data_size
    header.extend(chunk_size.to_bytes(4, 'little'))
    header.extend(b'WAVE')
    header.extend(b'fmt ')
    subchunk1_size = 16
    header.extend(subchunk1_size.to_bytes(4, 'little'))
    audio_format = 1
    header.extend(audio_format.to_bytes(2, 'little'))
    header.extend(channels.to_bytes(2, 'little'))
    header.extend(sample_rate.to_bytes(4, 'little'))
    byte_rate = sample_rate * channels * bits_per_sample // 8
    header.extend(byte_rate.to_bytes(4, 'little'))
    block_align = channels * bits_per_sample // 8
    header.extend(block_align.to_bytes(2, 'little'))
    header.extend(bits_per_sample.to_bytes(2, 'little'))
    header.extend(b'data')
    header.extend(data_size.to_bytes(4, 'little'))
    return header

def is_connected():
    try:
        requests.head("http://www.google.com", timeout=5)
        return True
    except requests.ConnectionError:
        return False

def save_wav_to_file(buffer):
    timestamp = int(time.time())
    os.makedirs("data", exist_ok=True)
    filename = f"data/{timestamp}_audio.wav"

    with wave.open(filename, 'wb') as wav_file:
        wav_file.setnchannels(channels)
        wav_file.setsampwidth(bytes_per_sample)
        wav_file.setframerate(sample_rate)
        wav_file.writeframes(buffer)

    return filename

def send_wav_buffer(buffer):
    supabase_url = os.environ.get("SUPABASE_URL")
    if not supabase_url:
        print("Environment variable SUPABASE_URL is not set.")
        return

    url = f"{supabase_url}/functions/v1/process-audio"
    auth_token = os.environ.get("AUTH_TOKEN")

    headers = {
        "Authorization": f"Bearer {auth_token}",
        "Content-Type": "audio/wav"
    }

    try:
        response = requests.post(url, headers=headers, data=buffer)
        response.raise_for_status()
    except requests.exceptions.RequestException as e:
        print(f"Error sending request: {e}")
        return False

    return True

def send_local_files():
    local_files = [f for f in os.listdir("data") if f.endswith(".wav")]
    for file in local_files:
        file_path = os.path.join("data", file)
        with open(file_path, 'rb') as f:
            wav_buffer = f.read()
            if send_wav_buffer(wav_buffer):
                os.remove(file_path)
                print(f"Sent local file: {file}")
            else:
                print(f"Failed to send local file: {file}")

def handle_audio_buffer():
    while True:
        data_chunk = bytearray()
        while len(data_chunk) < target_bytes:
            buffer = audio_queue.pop()
            data_chunk.extend(buffer)

        if audio_gain != DO_NOT_APPLY_GAIN:
            data_array = np.frombuffer(data_chunk, dtype=np.int16)
            data_array = np.clip(data_array * audio_gain, -2**15, 2**15 - 1).astype(np.int16)
            data_chunk = data_array.tobytes()

        if data_chunk:
            wav_header = create_wav_header(16, len(data_chunk))
            wav_buffer = wav_header + data_chunk

            if is_connected():
                if send_wav_buffer(wav_buffer):
                    if os.path.exists("data"):
                        send_local_files()
                else:
                    save_wav_to_file(wav_buffer)
            else:
                save_wav_to_file(wav_buffer)

def process_args():
    parser = argparse.ArgumentParser(description="Command line options")
    parser.add_argument("-s", "--save", action="store_true", help="Save audio to local file")
    parser.add_argument("-g", "--gain", type=float, default=DO_NOT_APPLY_GAIN, help="Microphone gain (increase volume of audio)")
    return parser.parse_args()

def main():
    args = process_args()
    global save_to_local_file, audio_gain
    save_to_local_file = args.save
    audio_gain = args.gain

    audio = pyaudio.PyAudio()
    stream = audio.open(format=pyaudio.paInt16,
                        channels=channels,
                        rate=sample_rate,
                        input=True,
                        frames_per_buffer=1024,
                        input_device_index=0)

    recording_thread = threading.Thread(target=record_audio, args=(audio, stream, 1024))
    sending_thread = threading.Thread(target=handle_audio_buffer)

    recording_thread.start()
    sending_thread.start()

    recording_thread.join()
    sending_thread.join()

    stream.stop_stream()
    stream.close()
    audio.terminate()

if __name__ == "__main__":
    main()