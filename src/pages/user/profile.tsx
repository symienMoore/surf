import React, { useEffect } from 'react'
import Image from 'next/image'
import { useAuth } from '../../firebase/firebaseContext'
import axios from 'axios'

const Profile = () => {
    const {currentUser} = useAuth()
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
    const imgSrc = currentUser
    if(currentUser) {
      return (
        <div>
          <Image src={currentUser.photoURL} alt="profile image" width="90" height="90" className=''/>
        </div>
      )
    }
}

export default Profile