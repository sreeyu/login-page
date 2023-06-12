import React, { useState, useEffect } from 'react';
import styles from './App.module.css'
import Login from './components/login/Login';
import Home from './components/home/Home';
import AuthContext from './components/store/auth-context';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userLoggedIn = localStorage.getItem('loggedIn');
    if(userLoggedIn === '1'){
      setIsLoggedIn(true);
    }
  },[])

  const getLogin = (email, password) => {
    localStorage.setItem('loggedIn', '1');
    setIsLoggedIn(true);
  }

  const getLogOut = () => {
    localStorage.removeItem('loggedIn')
    setIsLoggedIn(false);
  }
  
  return(
    <AuthContext.Provider value={{isLoggedIn: isLoggedIn, onLogout: getLogOut}}>
      {!isLoggedIn && <Login className={styles.login} onLogin ={getLogin}/>}
      {isLoggedIn && <Home />}
    </AuthContext.Provider>
  )
}

export default App;
