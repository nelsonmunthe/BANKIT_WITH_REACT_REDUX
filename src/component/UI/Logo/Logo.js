import React from 'react'

import logoBankit from '../../../assets/images/logo.png'
import classes from './Logo.module.css'

const logo = () => (
    <div className={classes.Logo}>
        <img src={logoBankit} alt="Logo Bank IT" />
    </div>
)

export default logo;