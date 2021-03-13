import React, { useState } from 'react';
import { connect } from 'react-redux';

import classes from './OperationClose.module.css'
import * as actions from '../../../store/action/index'

const OperationClose = (props) => {
    const [currentUser, setCurrentUser] = useState({
        username: '',
        pin: ''
    })

    const inputChangeUsernameHandler = (event) => {
        setCurrentUser({
            ...currentUser,
            username: event.target.value
        })
    }

    const inputChangePinHandler = (event) => {
        setCurrentUser({
            ...currentUser,
            pin: event.target.value
        })
    }

    return (
        <div className={[classes.Operation, classes.Operation__close].join(' ')}>
            <h2>Close account</h2>
            <form className={[classes.Form, classes.Form__close].join(' ')}>
                <input
                    value={currentUser.username}
                    onChange={(event) => inputChangeUsernameHandler(event)}
                    type="text" className={[classes.Form__input, classes.Form__input__user].join(' ')} />
                <input
                    value={currentUser.pin}
                    onChange={(event) => inputChangePinHandler(event)}
                    type="password" maxLength="6" className={[classes.Form__input, classes.Form__input__pin].join(' ')} />
                <button
                    className={[classes.Form__btn, classes.Form__btn__close].join(' ')}
                    onClick={(event) => props.close(event, currentUser.username, currentUser.pin)}
                >&rarr;</button>
                <label className={classes.Form__label}>Confirm user</label>
                <label className={classes.Form__label}>Confirm PIN</label>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        username: state.currentUser.username,
        pin: state.currentUser.pin
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         onChangeUsernameHandler: (event) => dispatch(actions.change_username(event)),
//         onChangePinHandler: (event) => dispatch(actions.change_pin(event))
//     }
// }

export default connect(mapStateToProps)(OperationClose);