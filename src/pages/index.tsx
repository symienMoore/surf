import { onSnapshot, query, collection, orderBy } from "firebase/firestore";
import type { NextPage } from "next";
import Image from 'next/image'
import Head from "next/head";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { useAuth } from "../firebase/firebaseContext";

const Home: NextPage = () => {
  const {currentUser} = useAuth()
  const [posts, setPosts] = useState<any[]>([])

  useEffect(() => {
    const unsubcribe = onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
      );
      console.log(posts)
    return () => {
      unsubcribe();
    };
  }, [db]);
  
  if(currentUser) {
    return (
      <>
        <h2>Welcome {currentUser.displayName}</h2>
        <div>
          {posts.map((post) => (
            <div key={post.id}>
              <h5>{post.data().name}</h5>
              <Image src={post.data().photoUrl} alt='' width={200} height={200}/>
              <h5>{post.data().data}</h5>
            </div>
        ))}
        </div>
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

