import React, {  useState, useEffect, useReducer } from 'react';
import Button from '../UI components/Button';
import styles from './Login.module.css'

const emailReducer = (state, action) => {

    if(action.type === 'USER_INPUT'){
        return {value: action.val, isValid: action.val.includes('@')}
    };

    if(action.type === 'INPUT_BLUR'){
        return {value: state.value, isValid: state.value.includes('@')}
    }

    return {value: '', isValid: false}
}


function Login(props){

    // const [userEmail, setUserEmail] = useState('');
    // const [validateEmail, setValidateEmail] = useState();
    const [userPassword, setUserPassword] = useState('');
    const [validatePassword, setValidatePassword] = useState();
    const [formIsvalid, setFormIsvalid] = useState(false);

    // useEffect(() => {
    //     const identifier = setTimeout(() => {
    //         setFormIsvalid(
    //             userEmail.includes('@') && userPassword.trim().length > 6
    //         );
    //     }, 500);

    //     return () => {
    //         clearTimeout(identifier);
    //     }
        
    // }, [userEmail, userPassword]);

    const [emailState, dispatchEmail] = useReducer (emailReducer, {value: '', isValid: null});
    
    const getUserEmail = (event) => {
        dispatchEmail({type: 'USER_INPUT', val: event.target.value})

        setFormIsvalid(
            event.target.value.includes('@') && userPassword.trim().length > 6
        );
    };

    const getUserPassword = (event) => {
        setUserPassword(event.target.value);

        setFormIsvalid(
            emailState.isValid && event.target.value.trim().length > 6
        );
    };

    const getEmailValidation = (event) =>{
        dispatchEmail({type: 'INPUT_BLUR'})
    };

    const getPasswordValidation = (event) => {
        setValidatePassword(
            event.target.value.trim().length > 6
        );
    };

    const getUserInfo = (event) => {
        event.preventDefault();
        props.onLogin(emailState.value, userPassword)
    }
    
    return(
        <div className={styles['login-container']}>
            <img src={require("../images/nightSky.jpg")} alt="no" />
            <form onSubmit={getUserInfo}>
                <label htmlFor="e-mail">E-mail</label>
                <input value={emailState.value} className={`${emailState.isValid === false ? styles.invalid : ''}`} id='e-mail' type="email" onChange={getUserEmail} onBlur={getEmailValidation} />
                <label htmlFor="pword">Password</label>
                <input value={userPassword} className={`${validatePassword === false ? styles.invalid : ''}`} id='pword' type="password" onChange={getUserPassword} onBlur={getPasswordValidation} />
                <Button type='submit' className={styles['login-btn']} disabled={!formIsvalid} >Log In</Button>
            </form>
            
        </div>
    )
};

export default Login;