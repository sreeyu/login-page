import React, { useState } from 'react';
import styles from './App.module.css'
import Login from './components/login/Login';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const getLogin = (email, password) => {
    setIsLoggedIn(true);
  }

  const getLogOut = () => {
    setIsLoggedIn(false);
  }
  
  return(
    <div className={styles.container}>
      <Login className={styles.login} onLogin ={getLogin}/>
    </div>
  )
}

export default App;
