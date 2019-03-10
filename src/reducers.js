import { combineReducers } from 'redux';
import { 
    MOUSE_IDLE_IN_DISTANCE, 
    MOUSE_SLOWLY_MOVING, 
    MOUSE_RAPIDLY_MOVING,
    CHANGE_CHARATER,
    CHANGE_CHARATER_VISIBILITY
} from './actions';

const mouseStateReducerInitState = {
    mouseX: 0,
    mouseY: 0,
    mouseSpeed: 0
};
const mouseStateReducer = (state = mouseStateReducerInitState, action) => {
    switch(action.type) {
        case MOUSE_IDLE_IN_DISTANCE:
            return state;
        case MOUSE_SLOWLY_MOVING:
            return state;
        case MOUSE_RAPIDLY_MOVING:
            return state;
        default:
            return state;
    }
}

const charaterStateReducerInitState = {
    charaterName: "Hamman",
    charaterImageURL: "TEST.URL",
    charaterIsVisible: true
}
const charaterStateReducer = (state = charaterStateReducerInitState, action) => {
    switch(action.type) {
        case CHANGE_CHARATER:
            return state;
        case CHANGE_CHARATER_VISIBILITY:
            console.log( Object.assign({}, state, {
                charaterIsVisible: action.charaterIsVisible
            }));
            return Object.assign({}, state, {
                charaterIsVisible: action.charaterIsVisible
            });
        default:
            return state;
    }
}

const stageStateReducerInitState = {
    stageHeight: 500,
    stageWidth: 500
}
const stageStateReducer = (state = stageStateReducerInitState, action) => {
    switch(action) {
        default:
            return state;
    }
}

const catchMeReducers = combineReducers({
    stageState: stageStateReducer,
    mouseState: mouseStateReducer,
    charaterState: charaterStateReducer
});

export default catchMeReducers;