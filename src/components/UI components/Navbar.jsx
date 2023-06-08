import styles from './Navbar.module.css'

function Navbar(){

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
                <button>Logout</button>
            </li>
        </ul>
    </nav>
    )
};

export default Navbar;