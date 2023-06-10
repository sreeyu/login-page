import React, {  useState, useEffect } from 'react';
import Button from '../UI components/Button';
import styles from './Login.module.css'


function Login(props){

    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [validatePassword, setValidatePassword] = useState();
    const [validateEmail, setValidateEmail] = useState()
    const [formIsvalid, setFormIsvalid] = useState(false);

    useEffect(() => {
        const identifier = setTimeout(() => {
            setFormIsvalid(
                userEmail.includes('@') && userPassword.trim().length > 6
            );
        }, 500);

        return () => {
            clearTimeout(identifier);
        }
        
    }, [userEmail, userPassword]);
    
    const getUserEmail = (event) => {
        setUserEmail(event.target.value);
    };

    const getUserPassword = (event) => {
        setUserPassword(event.target.value);
    };

    const getEmailValidation = (event) =>{
        setValidateEmail(
            event.target.value.includes('@')
        );
    };

    const getPasswordValidation = (event) => {
        setValidatePassword(
            event.target.value.trim().length > 6
        );
    };

    const getUserInfo = (event) => {
        event.preventDefault();
        props.onLogin(userEmail, userPassword)
    }
    
    return(
        <div className={styles['login-container']}>
            <img src={require("../images/nightSky.jpg")} alt="no" />
            <form onSubmit={getUserInfo}>
                <label htmlFor="e-mail">E-mail</label>
                <input value={userEmail} className={`${validateEmail === false ? styles.invalid : ''}`} id='e-mail' type="email" onChange={getUserEmail} onBlur={getEmailValidation} />
                <label htmlFor="pword">Password</label>
                <input value={userPassword} className={`${validatePassword === false ? styles.invalid : ''}`} id='pword' type="password" onChange={getUserPassword} onBlur={getPasswordValidation} />
                <Button type='submit' className={styles['login-btn']} disabled={!formIsvalid} >Log In</Button>
            </form>
            
        </div>
    )
};

export default Login;