import React, { useEffect, useCallback, useMemo, useReducer } from 'react';
import { setFrame, setNextFrame } from './actions';
import reducer from './reducer';
import createTimer from './timer';
import { createFrames, findFrameIndexByValue } from './helper';

let timer = null;
const defaultSettings = {
    paused: false,
    interval: 2000,
    startFrameValue: undefined
};

const ChartPlayer = ({ data, indexFieldSelector, initialSettings, children }) => {
    const settings = { ...defaultSettings, ...initialSettings };
    const frames = useMemo(() => createFrames(data, indexFieldSelector), []); 
    const startFrame = findFrameIndexByValue(frames, indexFieldSelector, settings.startFrameValue);  

    const [state, dispatch] = useReducer(reducer, {
        frame: startFrame,
        lastFrame: frames.length - 1,
        paused: settings.paused
    });   

    useEffect(() => {     
        timer = createTimer(() => dispatch(setNextFrame()), settings.interval);

        if(!settings.paused)
            timer.start();

        return () => timer.stop();
    }, []);

    const currentFrame = frames[state.frame];

    const framesInfo = {
        min: indexFieldSelector(frames[0][0]),
        max: indexFieldSelector(frames[frames.length - 1][0]),
        current: indexFieldSelector(currentFrame[0]) 
    };

    const rewind = useCallback(indexFieldValue => {
        dispatch(setFrame(indexFieldValue % framesInfo.min));        
        timer.reset();       
    }, []);
    const start = () => timer.start();
    const stop = () => timer.stop();
    
    return children({ 
        currentFrame,
        framesInfo, 
        actions: { rewind, start, stop }
    });
};

export default ChartPlayer;