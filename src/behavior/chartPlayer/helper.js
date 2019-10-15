export const createFrames = (data, fieldSelector) => {
    const groupedData = data.reduce( (accamulator, current) => {
        const indexField = fieldSelector(current);
        (accamulator[indexField] = accamulator[indexField] || []).push(current);
        return accamulator; 
    }, {});

    return Object.values(groupedData);
};

export const findFrameIndexByValue = (frames, selector, value) => {
    const found = frames
        .map( (f, i) => ({ frame: f, index: i }))
        .filter(({ frame }) => selector(frame[0]) == value);

    return found.length && found[0].index;
};