import React, { useRef, useState } from 'react'
import { useAuth } from '../../firebase/firebaseContext'
import {addDoc, collection, doc, serverTimestamp, setDoc, updateDoc} from 'firebase/firestore'
import {db, storage} from '../../firebase/firebase'
import { useForm } from 'react-hook-form'
import { ref, getDownloadURL, uploadString } from '@firebase/storage'

const PostForm = () => {
  const {currentUser} = useAuth()
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const [file, setFile] = useState<any | null>(null);
  const fileRef = useRef(null)

  const addImageToPost = (e) => {
    const rd = new FileReader()
    rd.readAsDataURL(e.target.files[0])
    rd.onload = (readerEvent) => {
      console.log(readerEvent?.target?.result)
      setFile(readerEvent?.target?.result)
    }
  }

  const uploadPost = async (data: any) => {
    const docRef = await addDoc(collection(db, "posts"), {
      name: currentUser.displayName,
      profile_pic: currentUser.photoURL,
      data: data.postBody,
      userId: currentUser.uid,
      photoUrl: '',
      timestamp: serverTimestamp()
    })
    const imageRef = ref(storage, `posts/${docRef.id}/image`)
    await uploadString(imageRef, file, "data_url").then(async () => {
      const downloadurl = await getDownloadURL(imageRef)
      await updateDoc(doc(db, 'posts', docRef.id), {
        photoUrl: downloadurl
      });
    });
    setFile(null)
  }
    return (
        <div>
            <form className="flex flex-col w-60 mt-20" onSubmit={handleSubmit(uploadPost)}>
              <textarea placeholder='Hows it going?...' className='input input-bordered w-full max-w-xs' {...register("postBody", { required: true })}></textarea>
              <input type="file" ref={fileRef} onChange={addImageToPost}/>
              <button className='btn-primary rounded w-24 m-0.5 p-0.5'>add post 🚀</button>
            </form>
        </div>
    )
}

const AddPost = () => {
  const {currentUser} = useAuth()
  if(currentUser) {
    return (
      <div>
          <PostForm/>
      </div>
    )
  } else {
    return(
      <div>
        <h1>You are not authenticated.</h1>
      </div>
    )
  }
}

export default AddPost