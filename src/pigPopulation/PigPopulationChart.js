import React, { Fragment } from 'react';
import { BarChart } from '../components/charts';
import { ChartPlayer } from '../behavior/chartPlayer';
import pigData from './wild-pig-data.json';
import Slider from '../components/primitives/Slider';
import PlayButton from './PlayButton';
import CustomChartTooltip from './CustomChartTooltip';

const PigPopulationChart = () => {
    const data = pigData["PIG_POPULATIONS"];

    // url parsing details should be encapsulated
    const url = new URL(window.location.href);  
    const playerSettings = {
        startFrameValue: +url.searchParams.get('year'),
        paused: url.searchParams.get('paused') == "true"
    };

    return (
        <ChartPlayer data={data} indexFieldSelector={item => item.year} initialSettings={playerSettings}>
            {({ currentFrame: dataByYear, framesInfo: { min, max, current }, actions: { start, stop, rewind } }) =>
                (<Fragment>
                    <BarChart
                        data={dataByYear}
                        keys={["island", "pigPopulation"]}
                        indexBy={"island"}
                        tooltip={CustomChartTooltip}
                    />
                    <div className="controls">
                        <PlayButton className="play-button" onStart={start} onStop={stop} initialState={playerSettings.paused} /> 
                        <Slider
                            value={current}
                            min={min}
                            max={max}
                            step={1}
                            onChange={rewind}
                        />
                    </div>
                </Fragment>)
            }
        </ChartPlayer>
    );
}

export default PigPopulationChart;