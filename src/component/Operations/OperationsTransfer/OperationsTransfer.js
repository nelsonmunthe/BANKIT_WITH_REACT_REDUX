import React, { useState } from 'react'

import classes from './OperationTransfer.module.css'

const Operations = (props) => {

    const [transfer, setTransfer] = useState({
        toUser: '',
        amount: 0
    });

    const inputChangeToUserHandler = event => {
        setTransfer({
            ...transfer,
            toUser: event.target.value
        })
    }

    const inputChangeAmountHandler = event => {
        setTransfer({
            ...transfer,
            amount: event.target.value
        })
    }

    return (
        <div className={[classes.Operation, classes.Operation__transfer].join(' ')}>
            <h2>Transfer money</h2>
            <form className={[classes.Form, classes.Form__transfer].join(' ')}>
                <input type="text"
                    value={transfer.toUser}
                    onChange={(event) => inputChangeToUserHandler(event)}
                    className={[classes.Form__input, classes.Form__input__to].join(' ')} />
                <input type="number"
                    value={transfer.amount}
                    onChange={(event) => inputChangeAmountHandler(event)}
                    className={[classes.Form__input, classes.Form__input__amount].join(' ')} />
                <button
                    className={[classes.Form__btn, classes.Form__btn__transfer].join(' ')}
                    onClick={(event) => props.transfer(event, transfer.toUser, transfer.amount)}
                >&rarr;</button>
                <label className={classes.Form__label}>Transfer to</label>
                <label className={classes.Form__label}>Amount</label>
            </form>
        </div>
    )
}

export default Operations;