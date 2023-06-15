import './modal.css';
import './loginmodal.css'
import React, { useState } from 'react';


interface Props {
    isLoginOpen: boolean;
    onLoginClose: () => void;
    login: (email: string, password: string) => void;
    signUp: (email: string, password: string) => void;

}


function preventClose(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation();
}

function LoginModal({ isLoginOpen, onLoginClose, login, signUp}: Props) {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loginClicked, setLoginClicked] = useState<boolean>(false);
    // const [signUpClicked, setSignUpClicked] = useState<boolean>(false);

    function showLogin() {
      setLoginClicked(true);
    }
    function showSignUp() {
      setLoginClicked(false);
    }

    if (!isLoginOpen) return null;

    return (
        <div className="modal-overlay" onClick={onLoginClose}>
            <div className="modal-content" onClick={preventClose}>
                <div className="modal-header">
                  <button onClick={showLogin} style={!loginClicked ? {backgroundColor : "grey"} : {backgroundColor : "blue"}}>Login</button>
                  <button onClick={showSignUp} style={loginClicked ? {backgroundColor : "grey"} : {backgroundColor : "blue"}}>Sign Up</button>
                </div>
                <div>
                  {loginClicked ? <form onSubmit={(e) => {
                    e.preventDefault();
                    login(email, password);
                    setEmail('');
                    setPassword('');
                    }}>
                    <input type="text" name="email" id="email-form" onChange={(e)=> setEmail(e.target.value)} value={email}/>
                    <br/>
                    <input type="password" name="password" id="password-form" onChange={e => setPassword(e.target.value)} value={password}/>
                    <br/>
                    <input type="submit" value="Login" />
                  </form> : <form onSubmit={(e) => {
                    e.preventDefault();
                    console.log(`Signing up ${email} ${password}`)
                    signUp(email, password);
                    setEmail('');
                    setPassword('');
                    }}>
                    <input type="text" name="email" id="email-form" onChange={(e)=> setEmail(e.target.value)} value={email}/>
                    <br/>
                    <input type="password" name="password" id="password-form" onChange={e => setPassword(e.target.value)} value={password}/>
                    <br/>
                    <input type="submit" value="Create Account" />
                  </form>}
                </div>
            </div>
        </div>

)
}

export default LoginModal;