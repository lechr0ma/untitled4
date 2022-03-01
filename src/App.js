import React, {useState} from "react";
import './styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";

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
    const [posts2, setPosts2] = useState([
            {id:1, title: 'python', body: 'Description' },
            {id:2, title: 'python 11', body: 'Description' },
            {id:3, title: 'python  11', body: 'Description' },
            {id:4, title: 'python 1 111', body: 'Description' },
            {id:5, title: 'python 1 11 ', body: 'Description' },
            {id:6, title: 'python11 1 1 1 ', body: 'Description' },
        ]
    )
  return (
    <div className="App">
        <PostList posts={posts} title={'JS POSTS'}/>
        <PostList posts={posts2} title={'PT POSTS'}/>
    </div>
  );
}

export default App;
