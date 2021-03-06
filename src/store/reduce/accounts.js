import * as actionTypes from '../action/actionTypes'

const initialState = {
    accounts: {
        account1: {
            owner: 'Jonas Schmedtmann',
            movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
            interestRate: 1.2,
            pin: 1111,
        },

        account2: {
            owner: 'Jessica Davis',
            movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
            interestRate: 1.5,
            pin: 2222,
        },

        account3: {
            owner: 'Steven Thomas Williams',
            movements: [200, -200, 340, -300, -20, 50, 400, -460],
            interestRate: 0.7,
            pin: 3333,
        },

        account4: {
            owner: 'Sarah Smith',
            movements: [430, 1000, 700, 50, 90],
            interestRate: 1,
            pin: 4444,
        }
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_UI:
            return {
                ...state,
                accounts: action.accounts
            }
        default:
            return state;
    }

}

export default reducer;