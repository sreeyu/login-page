import React, {  useState, useEffect, useReducer } from 'react';
import Button from '../UI components/Button';
import styles from './Login.module.css'
import Navbar from '../UI components/Navbar';

const emailReducer = (state, action) => {

    if(action.type === 'USER_INPUT'){
        return {value: action.val, isValid: action.val.includes('@')}
    };

    if(action.type === 'INPUT_BLUR'){
        return {value: state.value, isValid: state.value.includes('@')}
    }

    return {value: '', isValid: false}
}

const passwordReducer = (state, action) => {

    if(action.type === 'USER_INPUT'){
        return {value: action.val, isValid: action.val.trim().length > 6}
    }

    if(action.type === 'INPUT_BLUR'){
        return {value: state.value, isValid: state.value.trim().length > 6}
    }

    return {value: '', isValid: false};
}


function Login(props){

    // const [userEmail, setUserEmail] = useState('');
    // const [validateEmail, setValidateEmail] = useState();
    // const [userPassword, setUserPassword] = useState('');
    // const [validatePassword, setValidatePassword] = useState();
    const [formIsvalid, setFormIsvalid] = useState(false);

    const [emailState, dispatchEmail] = useReducer (emailReducer, {value: '', isValid: null});
    
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value: '', isValid: null});

    const {isValid: emailValid} = emailState;
    const {isValid: passwordValid} = passwordState;

    useEffect(() => {
        const identifier = setTimeout(() => {
            setFormIsvalid(emailValid && passwordValid);
        }, 500);

        return () => {
            clearTimeout(identifier);
        }
        
    }, [emailValid, passwordValid]);


    
    const getUserEmail = (event) => {
        dispatchEmail({type: 'USER_INPUT', val: event.target.value})

        // setFormIsvalid(
        //     event.target.value.includes('@') && passwordState.isValid
        // );
    };

    const getUserPassword = (event) => {
        dispatchPassword({type: 'USER_INPUT', val: event.target.value})

        // setFormIsvalid(
        //     emailState.isValid && event.target.value.trim().length > 6
        // );
    };

    const getEmailValidation = (event) =>{
        dispatchEmail({type: 'INPUT_BLUR'})
    };

    const getPasswordValidation = (event) => {
        dispatchPassword({type: 'INPUT_BLUR'})
    };

    const getUserInfo = (event) => {
        event.preventDefault();
        props.onLogin(emailState.value, passwordState.value)
    }
    
    return(
        <div className={styles['login-page']}>
            <Navbar />
        <div className={styles['login-container']}>
            <img src={require("../images/nightSky.jpg")} alt="no" />
            <form onSubmit={getUserInfo}>
                <label htmlFor="e-mail">E-mail</label>
                <input value={emailState.value} className={`${emailState.isValid === false ? styles.invalid : ''}`} id='e-mail' type="email" onChange={getUserEmail} onBlur={getEmailValidation} />
                <label htmlFor="pword">Password</label>
                <input value={passwordState.value} className={`${passwordState.isValid === false ? styles.invalid : ''}`} id='pword' type="password" onChange={getUserPassword} onBlur={getPasswordValidation} />
                <Button type='submit' className={styles['login-btn']} disabled={!formIsvalid} >Log In</Button>
            </form>
            
        </div>
        </div>
    )
};

export default Login;