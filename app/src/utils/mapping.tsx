
export type EmotionWord =
    | 'Admiration'
    | 'Adoration'
    | 'Aesthetic Appreciation'
    | 'Amusement'
    | 'Anger'
    | 'Annoyance'
    | 'Anxiety'
    | 'Awe'
    | 'Awkwardness'
    | 'Boredom'
    | 'Calmness'
    | 'Concentration'
    | 'Confusion'
    | 'Contemplation'
    | 'Contempt'
    | 'Contentment'
    | 'Craving'
    | 'Desire'
    | 'Determination'
    | 'Disappointment'
    | 'Disapproval'
    | 'Disgust'
    | 'Distress'
    | 'Doubt'
    | 'Ecstasy'
    | 'Embarrassment'
    | 'Empathic Pain'
    | 'Enthusiasm'
    | 'Entrancement'
    | 'Envy'
    | 'Excitement'
    | 'Fear'
    | 'Gratitude'
    | 'Guilt'
    | 'Horror'
    | 'Interest'
    | 'Joy'
    | 'Love'
    | 'Nostalgia'
    | 'Pain'
    | 'Pride'
    | 'Realization'
    | 'Relief'
    | 'Romance'
    | 'Sadness'
    | 'Sarcasm'
    | 'Satisfaction'
    | 'Shame'
    | 'Surprise (negative)'
    | 'Surprise (positive)'
    | 'Sympathy'
    | 'Tiredness'
    | 'Triumph';

export const emotionsToStressLevels = (emotions: EmotionWord[]): number[] => {
    const mapping: Record<EmotionWord, number> = {
        'Admiration': 2.5,
        'Adoration': 3.8,
        'Aesthetic Appreciation': 1.2,
        'Amusement': 2.7,
        'Anger': 9.5,
        'Annoyance': 7.2,
        'Anxiety': 9.7,
        'Awe': 3.7,
        'Awkwardness': 6.1,
        'Boredom': 5.3,
        'Calmness': 0.5,
        'Concentration': 1.8,
        'Confusion': 6.8,
        'Contemplation': 2.1,
        'Contempt': 8.3,
        'Contentment': 1.4,
        'Craving': 7.9,
        'Desire': 8.1,
        'Determination': 7.6,
        'Disappointment': 8.7,
        'Disapproval': 9.2,
        'Disgust': 9.8,
        'Distress': 9.6,
        'Doubt': 6.5,
        'Ecstasy': 3.2,
        'Embarrassment': 7.1,
        'Empathic Pain': 9.4,
        'Enthusiasm': 4.2,
        'Entrancement': 3.5,
        'Envy': 8.5,
        'Excitement': 5.8,
        'Fear': 9.9,
        'Gratitude': 2.3,
        'Guilt': 8.4,
        'Horror': 9.7,
        'Interest': 3.2,
        'Joy': 3.6,
        'Love': 2.9,
        'Nostalgia': 4.8,
        'Pain': 9.3,
        'Pride': 3.1,
        'Realization': 2.7,
        'Relief': 1.9,
        'Romance': 4.4,
        'Sadness': 8.8,
        'Sarcasm': 7.3,
        'Satisfaction': 2.2,
        'Shame': 8.6,
        'Surprise (negative)': 7.7,
        'Surprise (positive)': 6.4,
        'Sympathy': 3.7,
        'Tiredness': 6.9,
        'Triumph': 4.1,
        
    };

    return emotions.map((emotion: EmotionWord) => mapping[emotion]);
};


export const emotionsToColors = (emotion: string): string => {
    const colorMapping: Record<string, string> = {
        'Admiration': '#FFD54F', // Lighter Amber
        'Adoration': '#FFF176', // Light Yellow
        'Aesthetic Appreciation': '#DCE775', // Light Lime
        'Amusement': '#4DD0E1', // Lighter Cyan
        'Anger': '#EF5350', // Lighter Red
        'Annoyance': '#F06292', // Lighter Pink
        'Anxiety': '#BA68C8', // Lighter Deep Purple
        'Awe': '#9575CD', // Lighter Deep Purple
        'Awkwardness': '#7986CB', // Lighter Indigo
        'Boredom': '#CFD8DC', // Lighter Grey
        'Calmness': '#29B6F6', // Lighter Blue
        'Concentration': '#90A4AE', // Lighter Blue Grey
        'Confusion': '#FFB74D', // Lighter Orange
        'Contemplation': '#A1887F', // Lighter Brown
        'Contempt': '#EF5350', // Lighter Red
        'Contentment': '#81C784', // Lighter Green
        'Craving': '#FF8A65', // Lighter Deep Orange
        'Desire': '#FF8A65', // Lighter Deep Orange
        'Determination': '#DCE775', // Light Lime
        'Disappointment': '#CFD8DC', // Lighter Grey
        'Disapproval': '#F06292', // Lighter Pink
        'Disgust': '#BA68C8', // Lighter Deep Purple
        'Distress': '#EF5350', // Lighter Red
        'Doubt': '#90A4AE', // Lighter Blue Grey
        'Ecstasy': '#FFF176', // Light Yellow
        'Embarrassment': '#F06292', // Lighter Pink
        'Empathic Pain': '#EF5350', // Lighter Red
        'Enthusiasm': '#DCE775', // Light Lime
        'Entrancement': '#7986CB', // Lighter Indigo
        'Envy': '#AED581', // Lighter Green
        'Excitement': '#FFD54F', // Lighter Amber
        'Fear': '#BA68C8', // Lighter Deep Purple
        'Gratitude': '#81C784', // Lighter Green
        'Guilt': '#EF5350', // Lighter Red
        'Horror': '#BA68C8', // Lighter Deep Purple
        'Interest': '#29B6F6', // Lighter Blue
        'Joy': '#FFF176', // Light Yellow
        'Love': '#F48FB1', // Lighter Pink
        'Nostalgia': '#FFD54F', // Lighter Amber
        'Pain': '#E57373', // Lighter Red
        'Pride': '#7986CB', // Lighter Indigo
        'Realization': '#4FC3F7', // Lighter Blue
        'Relief': '#AED581', // Lighter Green
        'Romance': '#F48FB1', // Lighter Pink
        'Sadness': '#B0BEC5', // Lighter Grey
        'Sarcasm': '#FFCC80', // Lighter Orange
        'Satisfaction': '#81C784', // Lighter Green
        'Shame': '#EF9A9A', // Lighter Red
        'Surprise (negative)': '#FFAB91', // Lighter Deep Orange
        'Surprise (positive)': '#FFF59D', // Light Yellow
        'Sympathy': '#B39DDB', // Lighter Deep Purple
        'Tiredness': '#B0BEC5', // Lighter Grey
        'Triumph': '#DCE775', // Light Lime
    };
    return colorMapping[emotion];
};