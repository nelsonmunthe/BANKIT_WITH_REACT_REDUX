import React from 'react';

import classes from './Movements.module.css';
import Auxs from '../../hoc/Auxs/Auxs'


const movements = (props) => {
    const { movements } = props.currentUser;

    let move = <p>Loading Data</p>;

    if (movements) {
        move = movements.map((movement, index) => {
            const attachClasses = movement > 0 ? [classes.Movements__type, classes.Movements__type__deposit]
                : [classes.Movements__type, classes.Movements__type__withdrawal];
            const type = movement > 0 ? 'deposit' : 'withdrawal';
            return (
                <Auxs key={index + 1}>
                    <div className={classes.Movements__row}>
                        <div className={attachClasses.join(' ')}>
                            {index + 1} {type}
                        </div>
                        <div className={classes.Movements__date}>24/01/2037</div>
                        <div className={classes.Movements__value}>{movement}€</div>
                    </div>
                </Auxs>
            )
        });
    }

    return (
        <div className={classes.Movements}>
            {move}
        </div>
    )
}

export default movements;