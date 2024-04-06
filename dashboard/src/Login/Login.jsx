import React, { useContext, useState } from 'react'
import './loginPage.css'
import { signIn } from '../Firebase/userAuth'
import userContext from '../context/users/userContext';
import { useNavigate } from 'react-router';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigate();

    const { setUserState } = useContext(userContext)
    const handleSubmit = (e) => {
        e.preventDefault();
        signIn(email, password)
            .then((userCredentials) => {
                setUserState(userCredentials);
                if (userCredentials['role'] === 'patient') {
                    navigation('/guardian');
                }
                else if (userCredentials['role'] === 'careTaker') {
                    navigation('/caretaker');
                }
                else {
                    navigation('/admin');
                }
            })
            .catch(error => console.log(error));
    }

    return (
        <div className="login-page">
            <div className="form">
                {/* <form className="register-form">
                    <input type="text" placeholder="name" />
                    <input type="password" placeholder="password" />
                    <input type="text" placeholder="email address" />
                    <button>create</button>
                    <p className="message">Already registered? <a href="#">Sign In</a></p>
                </form> */}
                <form className="login-form" onSubmit={handleSubmit}>
                    <input type="text"
                        placeholder="username"
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }} />
                    <input type="password"
                        placeholder="password"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                    <button type='submit'>login</button>
                    {/* <p className="message">Not registered? <a href="#">Create an account</a></p> */}
                </form>
            </div>
        </div>
    )
}
