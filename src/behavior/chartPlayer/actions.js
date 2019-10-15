export const SET_NEXT_FRAME = 'SET_NEXT_FRAME';
export const setNextFrame = () => ({ type: SET_NEXT_FRAME });

export const SET_FRAME = 'SET_FRAME';
export const setFrame = frame => ({ type: SET_FRAME, payload: { frame } });