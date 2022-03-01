import React, {useRef, useState} from "react";
import './styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/buttons/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";

function App() {
    const [posts, setPosts] = useState([
            {id:1, title: 'JAvascript', body: 'Description' },
            {id:2, title: 'JAvascript 11', body: 'Description' },
            {id:3, title: 'JAvascript  11', body: 'Description' },
            {id:4, title: 'JAvascript 1 111', body: 'Description' },
            {id:5, title: 'JAvascript 1 11 ', body: 'Description' },
            {id:6, title: 'JAvascript11 1 1 1 ', body: 'Description' },
            ]
        )


    function createPost(post) {
        setPosts([...posts, post])
    }


  return (
    <div className="App">
        <PostForm addPost={createPost}/>
        <PostList posts={posts} title={'JS POSTS'}/>
    </div>
  );
}

export default App;
