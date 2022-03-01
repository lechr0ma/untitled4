import React, {useRef, useState} from "react";
import './styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/buttons/MyButton";
import MyInput from "./components/UI/input/MyInput";

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
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    function addPost (event) {
            event.preventDefault()
        setPosts(posts.concat({id:Date.now(), title: title, body: body }) )
        setTitle('')
        setBody('')


    }

  return (
    <div className="App">
        <form>
            <MyInput
                type="text"
                placeholder='Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <MyInput
                type="text"
                placeholder='Description'
                value={body}
                onChange={(e)=> setBody(e.target.value)}
            />
            <MyButton onClick={addPost}>Add post</MyButton>
        </form>
        <PostList posts={posts} title={'JS POSTS'}/>
    </div>
  );
}

export default App;
