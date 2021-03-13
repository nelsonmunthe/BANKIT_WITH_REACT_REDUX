import React from 'react'


import classes from './input.module.css'

const input = props => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];

    switch (props.elementType) {
        case 'input':
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value} onChange={props.changed} />
            break;
        case 'textarea':
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value} onChange={props.changed} />
            break;
        case 'number':
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value} onChange={props.changed} />
            break;
        default:
            inputElement = <input
                className={classes.InputElement}
                value={props.value} />
    }
    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    )
}

export default input;