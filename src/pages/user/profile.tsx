import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useAuth } from '../../firebase/firebaseContext'
import axios from 'axios'
import Button from '../../components/Button'

const Profile = () => {
    const {currentUser}: any = useAuth()
    const [profile, setProfile] = useState(false)
    // useEffect(() => {
    //   navigator.geolocation.getCurrentPosition((pos) => {
    //       console.log(pos)
    //       const latitude = pos.coords.latitude
    //       const longitude = pos.coords.longitude
    //       const api = process.env.NEXT_PUBLIC_MAP_KEY
    //       const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${api}`;
    //       axios.get(url).then(res => {
    //         console.log(res.data.results[5])
    //       })
    //   })
    // }, [])
    const updateUserProfile = () => {
      if(currentUser.displayName == null) {
        setProfile(true)
        console.log(profile)
      }
      console.log(currentUser)
    }
    useEffect(() => {
      updateUserProfile()
    }, [])
    
    const imgSrc = currentUser
    if(currentUser) {
      return (
        <div>
          <div>
            <Button 
            text="edit profile" 
            bg="bg-green-300" 
            w="w-32" 
            p="p-2"
            ml="ml-96"
            font="text-white"/>
          </div>
          <Image src={currentUser.photoURL} alt="profile image" width="90" height="90" className=''/>
        </div>
      )
    }
}

export default Profile