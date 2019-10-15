import React from 'react';
import { ResponsiveBar } from '@nivo/bar'

const Chart = ({ data, keys, indexBy, tooltip }) => (
    <ResponsiveBar
        data={data}
        keys={keys}
        indexBy={indexBy}
        margin={{ top: 50, bottom: 50, left: 50 }}
        padding={0.3}
        colors={() => 'pink'}
        axisTop={null}
        axisRight={null}
        tooltip={tooltip}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
    />
);

export default Chart;