import React, { useEffect, useState } from 'react';
import "./Home.css";
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const Home = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      const data = await getDocs(collection(db, "posts"));
      setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };
    getPost();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "posts", id));
    window.location.href = "/";
  }

  return (  
    <div className='homePage'>
      {postList.map((post) => {
        return (
          <div className="postContents" key={post.id}>
        <div className="postHeader">
          <h1>{post.title}</h1>
        </div>
        <div className="postTextContainer">
          <p>{post.postText}</p>
        </div>
        <div className="nameAndDeleteButton">
          <h3>{post.author.username}</h3>
          <button onClick={() => handleDelete(post.id)}>削除</button>
        </div>
      </div>
        )
      })}
    </div>
  )
}

export default Home