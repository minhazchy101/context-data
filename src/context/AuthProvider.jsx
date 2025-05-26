import { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
} from 'firebase/auth'
import { auth } from '../Fire/firebase.init'

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [load, setLoad] = useState(true)

    const createUser = (email, password) => {
        setLoad(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoad(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoad(false)
        })
        return () => unsubscribe()
    }, [])

    const contextInfo = {
        load,
        createUser,
        signIn,
        user,
    }
    return <AuthContext value={ contextInfo }>{ children }</AuthContext>
}

export default AuthProvider
