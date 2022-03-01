import React, {useState} from "react";
import './styles/App.css'

import PostList from "./components/PostList";

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
    function removePost(post) {
        setPosts(posts.filter(e=> e.id !== post.id))
    }


  return (
    <div className="App">
        <PostForm addPost={createPost}/>
        {posts.length ?
            <PostList rem={removePost} posts={posts} title={'Post List'}/>
            :
            <h1 style={{textAlign: 'center'}}>No Posts</h1>
        }
    </div>
  );
}

export default App;
