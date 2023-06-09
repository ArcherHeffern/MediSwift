import './modal.css';
import './loginmodal.css'
import React, { useState } from 'react';


interface Props {
    isLoginOpen: boolean;
    onLoginClose: () => void;
    login: (email: string, password: string) => void;

}



function preventClose(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation();
}

function LoginModal({ isLoginOpen, onLoginClose, login}: Props) {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    if (!isLoginOpen) return null;

    return (
        <div className="modal-overlay" onClick={onLoginClose}>
            <div className="modal-content" onClick={preventClose}>
                <div className="modal-header">
                  <button>Login</button>
                  <button>Sign Up</button>
                </div>
                <div>
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    login(email, password);
                    setEmail('');
                    setPassword('');
                    }}>
                    <input type="text" name="email" id="email-form" onChange={(e)=> setEmail(e.target.value)} value={email}/>
                    <br/>
                    <input type="password" name="password" id="password-form" onChange={e => setPassword(e.target.value)} value={password}/>
                    <input type="submit" value="submit" />
                  </form>
                </div>
            </div>
        </div>

)
}

export default LoginModal;