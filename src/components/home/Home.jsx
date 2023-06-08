import Navbar from '../UI components/Navbar'
import styles from './home.module.css'

function Home(){
    
    return(
        <div className={styles.home}>
            <Navbar />
            <h1>Welcome back!</h1>
        </div>
    )
}

export default Home;