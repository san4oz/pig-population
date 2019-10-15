import React, { useCallback } from 'react';
import Slider from '@material-ui/core/Slider';

const CustomSlider = ({ value, min, max, step, onChange }) => {
    const handleChange = useCallback((event, value) => {
        onChange(value);
    }, []);

    return (
        <Slider        
            step={step}
            value={value}
            min={min}
            max={max}
            marks={true}
            onChange={handleChange}
            getAriaValueText={value => value}
            valueLabelDisplay="on"
        />
    );
}

export default CustomSlider;