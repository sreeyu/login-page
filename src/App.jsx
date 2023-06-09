import React, { useState } from 'react';
import styles from './App.module.css'
import Login from './components/login/Login';
import Home from './components/home/Home';

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
      
      {!isLoggedIn && <Login className={styles.login} onLogin ={getLogin}/>}
      {isLoggedIn && <Home />}
    </div>
  )
}

export default App;
