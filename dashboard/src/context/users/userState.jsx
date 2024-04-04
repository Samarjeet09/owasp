import React, { useState } from 'react'
import { signIn, signUp } from '../../Firebase/userAuth';
import userContext from './userContext.jsx';

export default function UserState(props) {
    
    const [user, setUserState] = useState({});

    const login = (credentials) => {
        const { email, password } = credentials;
        signIn(email, password)
            .then((userDetials) => setUserState(userDetials))
            .catch((error) => console.log(error));
    }

    const signup = (credentials) => {
        signUp(credentials)
            .then((userDetails) => setUserState(userDetails))
            .catch((error) => console.log(error))
    }
    return (
        <userContext.Provider value={{ user, login, signUp }}>
            {props.children}
        </userContext.Provider>
    )
}
