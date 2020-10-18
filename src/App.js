import React, { useState, useEffect } from 'react'
import fire from './auth/fire'
import Login from './auth/Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Forms from './pages/Forms';
import Touch from './pages/Touch';
import Motion from './pages/Motion';
import Virtual from './pages/Virtual';
import Mobile from './pages/Mobile';
import ThhApps from './pages/ThhApps'

const Auth = () => {
  
}


function App() {

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
      setEmail('');
      setPassword('');
  }

  const clearErrors = () => {
      setEmailError('');
      setPasswordError('');
  }

  const handleLogin = () => {
      clearErrors();
      fire
          .auth()
          .signInWithEmailAndPassword(email, password)
          .catch(err => {
              switch(err.code){
                  case "auth/invalid-email":
                  case "auth/user-disabled":
                  case "auth/user-not-found":
                      setEmailError(err.message);
                      break;
                  case "auth/wrong-password":
                      setPasswordError(err.message);
                      break;
              }
          });
  };

  const handleSignup = () => {
      clearErrors();
      fire
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .catch(err => {
              switch(err.code){
                  case "auth/email-already-in-use":
                  case "auth/invalid-email":
                      setEmailError(err.message);
                      break;
                  case "auth/weak-password":
                      setPasswordError(err.message);
                      break;
              }
          });
  };

  const handleLogout = () => {
      fire.auth().signOut();
  };

  const authListener = () => {
      fire.auth().onAuthStateChanged(user => {
          if(user){
              clearInputs();
              setUser(user);
          } else {
              setUser('');
          }
      });
  };

  useEffect(() => {
      authListener();
  }, [])


  return (
    <div className="App">
      {user ? (
        <Router>
        <Navbar handleLogout={handleLogout} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/forms" component={Forms} />
          <Route path="/touch" component={Touch} />
          <Route path="/motion" component={Motion} />
          <Route path="/virtual" component={Virtual} />
          <Route path="/mobile" component={Mobile} />
          <Route path="/thhapps" component={ThhApps} />
        </Switch>
      </Router>
      ) : (
        <Login path="/login" email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleLogin={handleLogin} handleSignup={handleSignup} hasAccount={hasAccount} setHasAccount={setHasAccount} emailError={emailError} passwordError={passwordError} />
      )}
      
    </div>
  );
}

export default App;
