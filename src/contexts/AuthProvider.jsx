import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.init.js'

const auth =getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null);

    const userSignup=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userSignin=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userSignout=()=>{
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        })
        return ()=>{
            unsubscribe();
        }
    })
    const authInfo={
        auth,
        user,
        userSignup,
        userSignin,
        userSignout,
        name: 'Poros'
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;