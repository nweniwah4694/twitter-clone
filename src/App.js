import "./styles.css";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { useState } from "react";
import db from "./firebase";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [inputPost, setInputPost] = useState("");
  const [inputImage, setInputImage] = useState("");

  const postData = collection(db, "posts");
  getDocs(postData).then((querySnapshot) => {
    setPosts(querySnapshot.docs.map((doc) => doc.data()));
  });

  const onClickTweet = () => {
    addDoc(collection(db, "posts"), {
      avatar: "http://shincode.info/wp-content/uploads/2021/12/icon.png",
      displayName: "プログラミングチュートリアル",
      image: { inputImage },
      text: { inputPost },
      userName: "Tokyo",
      verified: true
    });

    setInputPost("");
    setInputImage("");
  };

  return (
    <div className="App">
      <h1>Twitter Clone App</h1>
      <input
        type="text"
        value={inputPost}
        onChange={(e) => setInputPost(e.target.value)}
      />

      <input
        type="text"
        value={inputImage}
        onChange={(e) => setInputImage(e.target.value)}
      />

      <button onClick={onClickTweet}>Tweet</button>

      {posts.map((post) => (
        <div className="post">
          <h3>
            {post.displayName}
            <span className="post--headerSpecial">@{post.username}</span>
          </h3>
        </div>
      ))}
    </div>
  );
}
