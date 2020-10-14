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
                    <h1>LOG IN</h1>
                    <input type="text" placeholder="Email" autoFocus required value={email} onChange={e => setEmail(e.target.value)} />
                    <p className="errorMsg">{emailError}</p>
                    <input type="password" placeholder="Password" required value={password} onChange={e => setPassword(e.target.value)} />
                    <p className="errorMsg">{passwordError}</p>
                    <div className="btnContainer">
                            <>
                                <button onClick={handleLogin}>continue</button>
                                {/* <p>Dont have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p> */}
                            </>
                    
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;