import React, { useState } from 'react'

import classes from './Summary.module.css'

const Summary = (props) => {
    const [sorting, setSorting] = useState(false);
    const { movements } = props.currentUser;

    let sortMovements = () => {
        if (sorting) {
            movements.sort((a, b) => a - b);
            console.log('sortiing true', movements)
            setSorting(!sorting)
        } else {
            movements.sort((a, b) => b - a);
            console.log('sortiing false', movements)
            setSorting(!sorting);
        }
    }

    const incomes = movements === undefined ? '' : movements
        .filter(movement => movement > 0)
        .reduce((calc, curr) => calc + curr, 0)
        .toFixed(2);

    const outcomes = movements === undefined ? '' : movements
        .filter(movement => movement < 0)
        .reduce((calc, curr) => calc + curr, 0)
        .toFixed(2);

    const interest = movements === undefined ? '' : movements
        .filter(movement => { return movement > 0 })
        .map(movement => (movement * props.currentUser.interestRate) / 100)
        .reduce((calc, curr) => calc + curr, 0)
        .toFixed(2)

    return (
        <div className={classes.Summary}>
            <p className={classes.Summary__label}>In</p>
            <p className={[classes.Summary__value, classes.Summary__value__in].join(' ')}>{incomes}€</p>
            <p className={classes.Summary__label}>Out</p>
            <p className={[classes.Summary__value, classes.Summary__value__out].join(' ')}>{Math.abs(outcomes)}€</p>
            <p className={classes.Summary__label}>Interest</p>
            <p className={[classes.Summary__value, classes.Summary__value__interest].join(' ')}>{interest}€</p>
            <button
                onClick={sortMovements}
                className={classes.Btn__sort}> SORT</button>
        </div>
    )
}

export default Summary;