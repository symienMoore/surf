import { onSnapshot, query, collection, orderBy } from "firebase/firestore";
import type { NextPage } from "next";
import Image from 'next/image'
import Head from "next/head";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { useAuth } from "../firebase/firebaseContext";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Home: NextPage = () => {
  const {currentUser} = useAuth()
  const [posts, setPosts] = useState<any[]>([])

  useEffect(() => {
    const subcribe = onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
      );
    return () => {
      subcribe();
    };
  }, [db]);
  
  if(currentUser) {
    return (
      <div className="relative">
        <div className="flex items-center">
          <Image className="border rounded-full" src={currentUser.photoURL} height={100} width={100} alt=""/>
          <h2 className="ml-5">Welcome {currentUser.displayName}</h2>
        </div>
        <div className="flex items-center flex-col relative sticky top-0 left-0 right-0">
          {posts.map((post) => (
            <div key={post.id} className="mt-20 rounded-lg shadow-md">
              <div className="flex mx-5 mt-5 mb-5 items-center">
                <Image src={post.data().profile_pic} alt="" width={100} height={100} className="rounded-full px-3"/>
                <Link href={{
                  pathname: "/user/[username]",
                  query: {username: post.data().name}
                }}>
                <h5 className="ml-5 font-bold hover:cursor-pointer">{post.data().name}</h5>  
                </Link>
              </div>
              <Image src={post.data().photoUrl} alt='' width={600} height={300}/>
                <div className="flex items-center">
                  <h5 className="mx-3 mt-3 mb-3">{post.data().data}</h5>
                  <div className="flex items-center">
                  <p>Likes</p>
                  <FontAwesomeIcon icon={faHeart}/>
                </div>
              </div>
              <div>
                <h5>Comments</h5>
              </div>
            </div>
            ))}
        </div>
      </div>
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

