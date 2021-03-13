import * as actionTypes from './actionTypes';

export const current_user = (username, pin) => {
    return {
        type: actionTypes.CURRENT_USER,
        username: username,
        pin: pin
    }
}

export const change_username = (event) => {
    return {
        type: actionTypes.CHANGE_USERNAME,
        username: event.target.value
    }
}

export const change_pin = (event) => {
    return {
        type: actionTypes.CHANGE_PIN,
        pin: event.target.value
    }
}