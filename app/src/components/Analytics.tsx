import React, { useState, useEffect } from 'react';
import BasicLineChart from './BasicLineChart';
import { emotionsToStressLevels } from '../utils/mapping';
import { EmotionWord } from '../utils/mapping';
import { average } from '../utils/average';
import { fetchData } from '../database/fetch';


function Analytics() {
    const [stressLevels, setStressLevels] = useState<number[]>([]);
    const [averageStressLevel, setAverageStressLevel] = useState<number>(0);

    useEffect(() => {
        const processEmotions = async () => {
            const mydata = await fetchData();
            if (!mydata) return;

            const prominentEmotions: EmotionWord[] = mydata.map(item => item.prominent_emotion);
            const mappedStressLevels = emotionsToStressLevels(prominentEmotions);
            setStressLevels(mappedStressLevels);
            setAverageStressLevel(average(mappedStressLevels));
        };

        processEmotions();
    }, []);

    return (
        <>
            <h1>You have an average stress level of {averageStressLevel}</h1>
            <div>
                {/* Assuming xAxisData expects an array of numbers and seriesData expects an array of numerical stress levels */}
                <BasicLineChart xAxisData={Array.from({ length: stressLevels.length }, (_, i) => i + 1)} seriesData={stressLevels} />
            </div>
        </>
    );
}

export default Analytics;
