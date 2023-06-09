import styles from './Navbar.module.css'

function Navbar(props){

    return(
    <nav className={styles.navbar}>
        <ul>
            <li>
                <a href="/">Users</a>
            </li>
            <li>
                <a href="/">Admin</a>
            </li>
            <li>
                <button onClick={props.onLogout} >Logout</button>
            </li>
        </ul>
    </nav>
    )
};

export default Navbar;