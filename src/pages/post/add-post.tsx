import React from 'react'
import { useAuth } from '../../firebase/firebaseContext'
import {doc, setDoc} from 'firebase/firestore'
import {db} from '../../firebase/firebase'

const PostForm = () => {
    return (
        <div>
            
        </div>
    )
}

const AddPost = () => {
  const {currentUser} = useAuth()
  return (
    <div>

    </div>
  )
}

export default AddPost