import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import Auxs from '../Auxs/Auxs'
import classes from './Layout.module.css'
import Navigations from '../../component/Navigations/Navigations'
import Balance from '../../component/Balance/Balance'
import Movements from '../../component/Movements/Movements'
import Summary from '../../component/Summary/Summary'
import OperationsTransfer from '../../component/Operations/OperationsTransfer/OperationsTransfer'
import OperationsLoan from '../../component/Operations/OperationLoan/OperationsLoan'
import OperationClose from '../../component/Operations/OperationClose/OperationClose'
import * as actions from '../../store/action/index'

const Layout = (props) => {
    const [currentUser, setCurrentuser] = useState({})

    const createUsernames = () => {
        const accs = Object.values(props.accounts);
        accs.forEach(acc => {
            acc.username = acc.owner
                .toLowerCase()
                .split(' ')
                .map(name => name[0])
                .join('')
        })
    };

    useEffect(() => {
        createUsernames();
    }, []);

    const loginUser = (event, username, pin, inputText) => {
        event.preventDefault();
        const accounts = Object.values(props.accounts);
        const accActive = accounts.find(acc => {
            return acc.username === username && acc.pin === Number(pin)
        });
        setCurrentuser(accActive);
        setTimeout(() => {
            inputText.forEach(input => input.value = '');
        }, 1);

    };

    let calcDisplayBalance = null;

    if (currentUser.movements) {
        calcDisplayBalance = currentUser.movements.reduce((calc, curr) => calc + curr, 0);
    }

    const updateUI = () => {
        const accounts = Object.values(props.accounts);
        const findAccount = accounts.find(acc => currentUser.username === acc.username);
        const accountIndex = accounts.findIndex(acc => currentUser.username === acc.username);
        accounts[accountIndex] = findAccount;
        props.onUpdateUi(accounts);
    };

    const transferTo = (event, username, amount) => {
        event.preventDefault();
        const nominal = Number(amount);
        const accounts = Object.values(props.accounts);
        const accReceiver = accounts.find(acc => acc.username === username);
        if (nominal > 0 && calcDisplayBalance >= nominal && accReceiver.username !== currentUser.username) {
            currentUser.movements.push(-nominal);
            accReceiver.movements.push(nominal);
        }
        updateUI();
    };

    const loanMoney = (event, amount) => {
        event.preventDefault();
        const nominal = Number(amount);
        if (nominal > 0 && currentUser.movements.some(move => move >= nominal * 0.1)) {
            currentUser.movements.push(nominal)
        }
        updateUI();
    }

    const closeAccount = (event, username, pin) => {
        event.preventDefault();
        if (currentUser.username === username && currentUser.pin === Number(pin)) {
            const accounts = Object.values(props.accounts);
            const IndexUser = accounts.findIndex(account => username === account.username);
            accounts.splice(IndexUser, 1);
            setCurrentuser({});
            updateUI();
        }
    }

    return (
        <Auxs>
            <Navigations
                loginUser={loginUser}
                currentUser={currentUser}
            />
            <main className={classes.Content}
                style={{ opacity: currentUser.username && currentUser.pin ? '1' : '0' }}>
                <Balance calcDisplayBalance={calcDisplayBalance} />
                <Movements currentUser={currentUser} />
                <Summary currentUser={currentUser} />
                <OperationsTransfer transfer={transferTo} />
                <OperationsLoan loan={loanMoney} />
                <OperationClose close={closeAccount} />
            </main>
        </Auxs>
    )
}

const mapStateToProps = state => {
    return {
        accounts: state.accounts.accounts,
        username: state.currentUser.username,
        pin: state.currentUser.pin
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUpdateUi: (accounts) => dispatch(actions.update_ui(accounts))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);