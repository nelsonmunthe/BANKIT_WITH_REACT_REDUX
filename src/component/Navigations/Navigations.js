import React, { useState } from 'react';
import { connect } from 'react-redux';

import classes from './Navigations.module.css'
import Logo from '../UI/Logo/Logo';
import * as actions from '../../store/action/index'

const Navigations = (props) => {

    const clickButton = (event, username, pin) => {
        const inputText = document.querySelectorAll('.Navigations_Login__input__2_22p');
        props.loginUser(event, username, pin, inputText);
    }

    return (
        <header>
            <nav>
                <p className={classes.Welcome}>{props.currentUser.username
                    ? `Welcome Back, ${props.currentUser.owner.split(' ')[0]}`
                    : `Log in to get started`}</p>
                <Logo />
                <form className={classes.Login}>
                    <input type="text"
                        value={props.username}
                        onChange={(event) => props.onChangeUsernameHandler(event)}
                        placeholder="user"
                        className={classes.Login__input} />
                    <input type="password"
                        value={props.pin} placeholder="PIN"
                        onChange={(event) => props.onChangePinHandler(event)}
                        maxLength="4"
                        className={classes.Login__input} />
                    <button
                        className={classes.Login__btn}
                        onClick={(event) => clickButton(event, props.username, props.pin)}
                    >&rarr;</button>
                </form>
            </nav>
        </header>
    )
}

const mapStateToProps = (state) => {
    return {
        username: state.currentUser.username,
        pin: state.currentUser.pin
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeUsernameHandler: (event) => dispatch(actions.change_username(event)),
        onChangePinHandler: (event) => dispatch(actions.change_pin(event))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Navigations);