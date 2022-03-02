import React, {useEffect, useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/buttons/MyButton";
import {useSortAndSearch} from "./hooks/usePosts";
import PostService from "./API/PostService";
import {useFetching} from "./hooks/useFetching";

function App() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort:'', search:''})
    const [modal, setModal] = useState(false)
    const sortAndSearch = useSortAndSearch(posts, filter.sort, filter.search )
    const [fetchPosts, isLoading, loadingError ] = useFetching(async () => {
        const result = await PostService.getAll();
        setPosts(result)
    })



    useEffect(() => {
        fetchPosts()
    },[])

    function createPost(post) {
        setPosts([...posts, post])
        setModal(false)
    }
    function removePost(post) {
        setPosts(posts.filter(e=> e.id !== post.id))
    }


  return (
    <div className="App">
        <MyButton style={{marginTop: 20, marginRight: 20}}
                  onClick={fetchPosts}
        >
            Get posts
        </MyButton>
        <MyButton style={{marginTop: 20}} onClick={() => setModal(true)}>
            Add Post
        </MyButton>
        <MyModal visible={modal} set={setModal}>
            <PostForm addPost={createPost}/>
        </MyModal>
        <hr style={{margin: '15px 0'}}/>
        <PostFilter filter={filter} setFilter={setFilter}/>
        {loadingError && <h1>{loadingError}</h1>}
        {isLoading ? <h1 style={{textAlign: 'center'}}>Loading.....</h1>
        :
        <PostList rem={removePost} posts={sortAndSearch} title={'Post List'}/>}
    </div>
  );
}

export default App;
