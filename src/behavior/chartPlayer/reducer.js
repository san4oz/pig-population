import { SET_FRAME, SET_NEXT_FRAME } from './actions';

const reducer = (state, action) => {
    switch(action.type){
        case 'toggle': 
            return { ...state, paused: !state.paused };
        case SET_FRAME:
            return { ...state, frame: action.payload.frame };
        case SET_NEXT_FRAME:
            return { ...state, frame: state.frame === state.lastFrame ? 0 : state.frame + 1 };
        default:
            return state; 
    }
};

export default reducer;