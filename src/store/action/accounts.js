import * as actionTypes from './actionTypes';

export const update_ui = (accounts) => {
    return {
        type: actionTypes.UPDATE_UI,
        accounts: accounts
    }
};

