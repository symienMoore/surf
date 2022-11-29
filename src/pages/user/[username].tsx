import React, { useEffect, useState } from 'react'

const Username = () => {
    const [user, setUser] = useState<object>({})
    useEffect(() => {
        const queryString = window.location;
        console.log(queryString.href.split('/')[4]);
    
    }, [])
    
  return (
    <div>Username</div>
  )
}

export default Username