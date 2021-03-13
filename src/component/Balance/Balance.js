import React from 'react'

import classes from './Balance.module.css'

const balance = (props) => {

    const day = new Date().getDay();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();

    return (
        <div className={classes.Balance}>
            <div>
                <p className={classes.Balance__label}>Current balance</p>
                <p className={classes.Balance__date}>
                    As of <span className={classes.Date}>{`${day}/${month}/${year}`}</span>
                </p>
            </div>
            <p className={classes.Balance__value}>{props.calcDisplayBalance}€</p>
        </div>
    )
}


export default balance;