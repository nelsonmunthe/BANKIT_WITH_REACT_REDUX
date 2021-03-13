import React, { useState } from 'react'

import classes from './OperationLoan.module.css'

const OperationLoan = (props) => {

    const [loanMoney, setLoanMoney] = useState(0);

    const inputChangeHandlerLoan = (event) => {
        setLoanMoney(event.target.value)
    }
    return (
        <div className={[classes.Operation, classes.Operation__loan].join(' ')}>
            <h2>Request loan</h2>
            <form className={[classes.Form, classes.Form__loan].join(' ')}>
                <input
                    type="number"
                    onChange={(event) => inputChangeHandlerLoan(event)}
                    value={loanMoney}
                    className={[classes.Form__input, classes.Form__input__loan_amount].join(' ')} />
                <button
                    className={[classes.Form__btn, classes.Form__btn__loan].join(' ')}
                    onClick={(event) => props.loan(event, loanMoney)}
                >&rarr;</button>
                <label className={[classes.Form__label, classes.Form__label__loan].join(' ')}>Amount</label>
            </form>
        </div>
    )
}

export default OperationLoan;