import styles from './App.module.css'
import Login from './components/login/Login';

function App() {
  return(
    <div className={styles.container}>
      <Login className={styles.login}/>
    </div>
  )
}

export default App;
