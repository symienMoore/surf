import {app as firebase} from '../../firebase/firebase';
import React from 'react'
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuth } from '../../firebase/firebaseContext';

const Login = () => {
  const {signIn} = useAuth()
  const doSignIn = () => {
    signIn()
  }
  return (
    <div>
        <button className='btn-primary p-1' onClick={doSignIn}>log in</button>
    </div>
  )
}

export default Login