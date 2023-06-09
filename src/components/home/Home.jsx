import Navbar from '../UI components/Navbar'
import styles from './Home.module.css'

function Home(props){
    
    return(
        <div className={styles.home}>
            <Navbar onLogout={props.onLogout}/>
            <h1>Welcome back!</h1>
        </div>
    )
}

export default Home;