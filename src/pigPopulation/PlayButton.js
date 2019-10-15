import React, { useState, useCallback } from 'react';
import Button from '../components/primitives/Button';

const PlayButton = ({ onStart, onStop, initialState, ...rest }) => {    
    const [paused, setPaused] = useState(initialState);
    const handleClick = () => {
        paused ? onStart() : onStop();
        setPaused(!paused);
    };

    return (<Button color="secondary" variant="contained" onClick={handleClick} {...rest}>{paused ? '>' : '||'}</Button>);
};

export default PlayButton;