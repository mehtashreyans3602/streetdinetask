'use client'
import React from 'react';
import dynamic from 'next/dynamic';
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false, })

const LaunchPieChart = ({ totalLaunches, successfulLaunches, failedLaunches }) => {
    const data = [
        {
            labels: ['Successful Launches: ' + successfulLaunches, 'Failed Launches: ' + failedLaunches],
            values: [successfulLaunches, failedLaunches],
            type: 'pie',
            marker: {
                colors: ['#000', '#eee'],
            },
            hoverinfo: 'label+percent',
        },
    ];

    const layout = {
        title: {
            text: 'Launch Statistics',
            font: {
                size: 22,
            },
        },
        showlegend: true,
        responsive: true,
    };

    return (
        <div className="flex bg-white border-2">
            <div className="flex flex-col-reverse justify-center w-full h-full">
                <Plot data={data} layout={layout} className='h-[500px] w-[500px]'/>
                
            </div>
        </div>
    );
};

export default LaunchPieChart;
