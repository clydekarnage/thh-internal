import React from 'react'
import '../components/Navbar.css'
import Logo from '../img/logo.png'
import '../../src/App.css'

const Login = (props) => {

    const { email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError } = props;
    
    return(
        <>
            <section className="login">
            <div className="logo-login">
                <img src={Logo} />
            </div>
                <div className="loginContainer">
                            {hasAccount ? (
                                <>
                                <h1 onClick={handleLogin}>Sign In</h1>
                                
                                </>
                            ) : (
                                <>
                                <h1 onClick={handleSignup}>Sign Up</h1>
                                
                                </>
                            )}
                    
                    <input type="text" placeholder="Email" autoFocus required value={email} onChange={e => setEmail(e.target.value)} />
                    <p className="errorMsg">{emailError}</p>
                    <input type="password" placeholder="Password" required value={password} onChange={e => setPassword(e.target.value)} />
                    <p className="errorMsg">{passwordError}</p>
                    <div className="btnContainer">
                            {hasAccount ? (
                                <>
                                <button onClick={handleLogin}>continue</button>
                                <p style={{color: 'black', textAlign: 'center'}}>Dont have an account? <span style={{color: '#93D500'}} onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
                                </>
                            ) : (
                                <>
                                <button onClick={handleSignup}>continue</button>
                                <p style={{color: 'black', textAlign: 'center'}}>Have an account? <span style={{color: '#93D500'}} onClick={() => setHasAccount(!hasAccount)}>Sign In</span></p>
                                </>
                            )}
                    
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;