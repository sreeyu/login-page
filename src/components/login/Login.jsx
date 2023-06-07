import Button from '../UI components/Button';
import styles from './Login.module.css'


function Login(){
    return(
        <div className={styles['login-container']}>
            <img src={require("../images/nightSky.jpg")} alt="no" />
            <form action="">
                <label htmlFor="e-mail">E-mail</label>
                <input id='e-mail' type="email" />
                <label htmlFor="pword">Password</label>
                <input id='pword' type="password" />
                <Button type='submit' className={styles['login-btn']} >Log In</Button>
            </form>
            
        </div>
    )
};

export default Login;