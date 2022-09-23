import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useAuth } from "../firebase/firebaseContext";

const Home: NextPage = () => {
  const {currentUser} = useAuth()
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getPosts = async () => {

    }

    getPosts()
  }, [])
  
  if(currentUser) {
    return (
      <>
        <h2>Welcome {currentUser.displayName}</h2>
        
      </>
    );
  } else {
    return (
      <>
        <h1 className="bold">Welcome to Surf!</h1>
        Sign in and share your stories.
      </>
    )
  }
};

export default Home;

