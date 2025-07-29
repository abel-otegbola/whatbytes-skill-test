'use client'
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import ChartAnnotation from 'chartjs-plugin-annotation';

Chart.register( CategoryScale, LinearScale, PointElement, LineElement, Filler, Title, Tooltip, Legend, ChartAnnotation );

import { Line } from 'react-chartjs-2';


export default function Comparison() {

    const data = {
        labels: [0, 25, 50, 75, 100],
        datasets: [
            {
                data: [0, 2, 4, 3, 5],
                borderColor: "rgba(202, 9, 255, 1)",
                backgroundColor: "rgba(202, 9, 255, 0.08)",
                fill: true,
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
            },
        },
        elements: {
            line: {
                tension: 0.4,
                borderWidth: 1,
            },
            point: {
                radius: 2,
                hitRadius: 10
            }
        }
    }

    return (
        <Line data={data} options={options} />
    )
}