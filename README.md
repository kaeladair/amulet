# Amulet: Wearable Emotion and Stress Monitoring

## Inspiration

Our journey began with a simple realization: **Education shapes futures, but the emotional toll it takes can shape lives in unintended ways**. Mental health challenges among students have been rising, often unnoticed until they manifest in more serious ways. In light of this, the hackathon theme of education resonated deeply with us, prompting us to create a solution that not only tracks educational progress but also safeguards the mental wellbeing of students. Thus, Amulet was born—a Raspberry Pi Zero 2 W based wearable designed to monitor, analyze, and understand the emotional and stress-related experiences of students.

## What We Learned

Building Amulet was an enriching experience that expanded our expertise across various domains:

- **Hardware Capabilities**: We delved into the potential of the Raspberry Pi Zero 2 W, exploring its hardware capabilities for audio recording and data transmission in a wearable format.

- **Audio Processing**: We grappled with the nuances of continuous audio processing, learning to handle vast streams of data while preserving the quality necessary for accurate analysis.

- **Natural Language Processing (NLP)**: Our journey through the realms of NLP and machine learning led us to novel ways of creating embeddings that encapsulate the essence of human speech.

- **Artificial Emotional Intelligence**: By integrating with Hume AI, we ventured into the emergent field of emotional AI, training our system to detect subtle variances in emotional states from audio cues and vocal bursts, independant of transcription content.

- **Frontend Development**: We crafted an interactive frontend that not only presents data but also tells a story—the story of a student's day, their challenges, and their triumphs.

## How We Built It

Amulet is a testament to interdisciplinary innovation, integrating hardware, backend, AI, and frontend technologies into a cohesive system.

- **The Wearable**: We engineered a discreet and comfortable device using the Raspberry Pi Zero 2 W, capable of capturing audio without intruding on the wearer's daily activities.

- **Backend Processing**: Audio streams are securely transmitted to our backend servers, where they undergo noise reduction and normalization before being converted into embeddings through state-of-the-art NLP models.

- **Emotion Analysis**: Hume AI's robust API provides the backbone for our emotion detection, dissecting the audio to reveal underlying emotions at different points in the transcript.

- **Frontend Interface**: Our web application offers a dynamic timeline that plots emotional peaks and valleys alongside stress markers. Students and educators can interact with this timeline, seeking correlations and insights that might otherwise remain hidden.

## Challenges Faced

Our project pushed the boundaries of what we thought possible, and in doing so, presented numerous challenges:

- **Real-Time Data Handling**: Managing a live feed of audio data and processing it in real time without latency was a significant hurdle that required optimizing every step of our data pipeline.

- **Battery Life and Power Management**: Ensuring that our wearable device could operate for an entire school day on a single charge demanded careful power management and hardware optimizations.

- **User Experience**: Designing a frontend that could distill complex emotional data into an intuitive, easily navigable interface required multiple iterations and user testing sessions.

## The Impact on Education

We believe Amulet will revolutionize the educational experience by:

- **Promoting Awareness**: By making students aware of their emotional patterns, we empower them to take control of their mental health.

- **Facilitating Intervention**: Educators can utilize the insights provided to intervene at critical moments, possibly preventing more serious mental health issues.

- **Tailoring Educational Approaches**: The data gathered can inform curriculum design, ensuring it aligns with the emotional well-being of students.

- **Fostering a Supportive Environment**: Our project encourages the creation of a school culture where mental health is openly discussed and actively supported.

## Conclusion

Amulet stands at the intersection of technology and compassion. We've crafted more than a product; we've created a potential paradigm shift in educational well-being. As we present our project to the world, we are hopeful for its role in shaping a more emotionally intelligent, empathetic, and supportive educational landscape.

---

_We are grateful for the opportunity to share Amulet with the hackathon judges and are excited about the positive impact it promises for students everywhere._
