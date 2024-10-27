import logo from './logo.svg';
import './App.css';
import db from './firebase';
import { useEffect, useState } from 'react';
import { addDoc, collection, onSnapshot } from "firebase/firestore"; 

function App() {
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState("");

  // Firestoreにテキストを追加する関数
  const addText = async () => {
    try {
      await addDoc(collection(db, "posts"), { text: text });
      setText(""); // 入力欄をクリア
    } catch (e) {
      alert("エラーです");
    }
  }

  // Firestoreからリアルタイムでデータを取得する
  useEffect(() => {
    const postsCollectionRef = collection(db, "posts");

    // onSnapshotでリアルタイムにデータを取得
    const unsubscribe = onSnapshot(postsCollectionRef, (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });

    // クリーンアップ関数でリスナーを解除
    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)}
        placeholder="投稿内容を入力" 
      />
      <button onClick={addText}>送信</button>
      
      {/* 取得したデータを表示 */}
      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.text}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
