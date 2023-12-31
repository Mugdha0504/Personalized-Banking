import React, { useContext, useState, useEffect, useRef} from 'react'
import {auth} from '../../firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, updatePassword } from 'firebase/auth'


const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}){
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const userInfo = useRef()

    function signup(name,email, password){
        createUserWithEmailAndPassword(auth,name,email,password)
        return
    }

    function login(email, password){
        return signInWithEmailAndPassword(auth,email,password)
        
    }

    function logout(){
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, async user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])


    const value = {
        login,
        signup,
        logout,
        userInfo
    }

    return <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
}