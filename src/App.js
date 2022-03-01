import React, {useMemo, useState} from "react";
import './styles/App.css'

import PostList from "./components/PostList";

import PostForm from "./components/PostForm";
import SortSelect from "./components/UI/select/SortSelect";
import MyInput from "./components/UI/input/MyInput";

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
    const [sortBy, setSort] = useState('');
    const [search, setSearch] = useState('');



    const sortedPosts = useMemo(()=>{
            console.log('aaaaaa')
            if (sortBy){
                return [...posts]
                    .sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
            } else {
                return posts
            }
        }, [sortBy, posts])

    const sortAndSearch = useMemo(() =>{
        if (search){
            return sortedPosts.filter(e => e.title.toLowerCase().includes(search)
                || e.body.toLowerCase().includes(search))
        } else {
            return sortedPosts
        }
    }, [search, sortedPosts])

    function sortPosts(sort) {
        setSort(sort)
    }

    function createPost(post) {
        setPosts([...posts, post])
    }
    function removePost(post) {
        setPosts(posts.filter(e=> e.id !== post.id))
    }


  return (
    <div className="App">
        <PostForm addPost={createPost}/>
        <hr  style={{margin:'10px 0'}}/>
        <SortSelect
            value={sortBy}
            set={sortPosts}
            options={[
                {value: 'title', body: 'title'},
                {value: 'body', body: 'description'}
                ]}
        />
        <MyInput value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search...'/>
        {sortAndSearch.length ?
            <PostList rem={removePost} posts={sortAndSearch} title={'Post List'}/>
            :
            <h1 style={{textAlign: 'center'}}>No Posts</h1>
        }
    </div>
  );
}

export default App;
