import React from 'react'

import classes from './Button.module.css'

const button = props => {

    return(
        
        <div>
            <button className={classes.Button}>
                {props.children}
            </button>
        </div>
    )
}

export default button;