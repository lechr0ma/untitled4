import React, {useMemo, useState} from "react";
import './styles/App.css'

import PostList from "./components/PostList";

import PostForm from "./components/PostForm";
import SortSelect from "./components/UI/select/SortSelect";
import MyInput from "./components/UI/input/MyInput";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/buttons/MyButton";
import {useSortAndSearch} from "./hooks/usePosts";

function App() {
    const [posts, setPosts] = useState([
            {id:1, title: 'JAvascript', body: 'Description' },
            {id:2, title: 'JAvascript 1', body: 'Qescription' },
            {id:3, title: 'JAvascript 2', body: 'Wescription' },
            {id:4, title: 'JAvascript 3', body: 'Eescription' },
            {id:5, title: 'JAvascript 4 ', body: 'Rescription' },
            {id:6, title: 'JAvascript 5', body: 'Tescription' },
            ]
        )
    const [filter, setFilter] = useState({sort:'', search:''})
    const [modal, setModal] = useState(false)
    const sortAndSearch = useSortAndSearch(posts, filter.sort, filter.search )


    function createPost(post) {
        setPosts([...posts, post])
        setModal(false)
    }
    function removePost(post) {
        setPosts(posts.filter(e=> e.id !== post.id))
    }


  return (
    <div className="App">
        <MyButton style={{marginTop: 20}} onClick={() => setModal(true)}>
            Add Post
        </MyButton>
        <MyModal visible={modal} set={setModal}>
            <PostForm addPost={createPost}/>
        </MyModal>
        <hr style={{margin: '15px 0'}}/>
        <PostFilter filter={filter} setFilter={setFilter}/>
        <PostList rem={removePost} posts={sortAndSearch} title={'Post List'}/>
    </div>
  );
}

export default App;
