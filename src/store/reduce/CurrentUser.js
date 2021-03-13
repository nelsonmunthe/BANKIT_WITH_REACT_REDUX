import * as actionTypes from "../action/actionTypes";

const initialState = {
    username: '',
    pin: '',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CURRENT_USER:
            return {
                ...state,
                username: action.username,
                pin: action.pin,
            };
        case actionTypes.CHANGE_USERNAME:
            return {
                ...state,
                username: action.username,
            };
        case actionTypes.CHANGE_PIN:
            return {
                ...state,
                pin: action.pin,
            };
        default:
            return state;
    }
};

export default reducer;
