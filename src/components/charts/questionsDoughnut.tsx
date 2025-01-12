'use client'
import { Chart, ArcElement, Title, Tooltip, Legend, Filler } from 'chart.js';

Chart.register( ArcElement, Filler, Title, Tooltip, Legend );

import { Doughnut } from 'react-chartjs-2';

export default function QuestionsDoughnut({ score }: { score: number }) {


    const data = {
        labels: ["correct", "incorrect"],
        datasets: [
            {
                data: [score, 15-score],
                borderColor: [
                    'rgb(44, 54, 250)',
                    "rgba(228, 227, 238, 0.7)"
                ],
                backgroundColor: [
                    'rgb(44, 54, 250)',
                    'rgba(228, 227, 238, 0.7)',
                ],
                weight: 8,
                borderWidth: 0,
                cutout: "70%",
                borderRadius: 0
            }
        ]
    }

    const options = {
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false
            }
        }
        
    }

    return (
        <Doughnut data={data} options={options} />
    )
}