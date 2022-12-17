import React, { useContext, useEffect, useRef, useState } from "react"
import {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth'
import {app as firebase} from '../firebase/firebase';


const AuthContext = React.createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}

 export const AuthProvider = ({children}: any) => {
    const [currentUser, setCurrentUser] = useState<object>({})
    const [loading, setLoading] = useState(false)
    const userInfo = useRef()
    const auth = getAuth(firebase)
    
    function signIn(){
        const provider = new GoogleAuthProvider()
          signInWithPopup(auth, provider)
          .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            const user = result.user;
          })
    }


    const logout = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])

    const value = {
        signIn,
        logout,
        currentUser
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
 }