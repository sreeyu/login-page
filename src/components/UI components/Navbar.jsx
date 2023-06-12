import React, { useContext } from 'react';
import AuthContext from '../store/auth-context';
import styles from './Navbar.module.css'

function Navbar(props){

    const ctx = useContext(AuthContext);

    return(
        <nav className={styles.navbar}>
            <h2>My Website</h2>
            <ul>
            {ctx.isLoggedIn && <li>
                    <a href="/">Users</a>
                </li>}
                
                {ctx.isLoggedIn && <li>
                    <a href="/">Admin</a>
                </li>}
                
                {ctx.isLoggedIn && <li>
                    <button onClick={ctx.onLogout} >Logout</button>
                </li>}
                
            </ul>
        </nav>
    )
};

export default Navbar;