import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/buttons/MyButton";

const PostForm = (props) => {
    const [post, setPost] = useState({title:'', body: ''})
    function addPost (event) {
        event.preventDefault()
        props.addPost({id: Date.now(), ...post})
        setPost({title:'', body: ''})

    }
    return (
        <form>
            <MyInput
                type="text"
                placeholder='Title'
                value={post.title}
                onChange={(e) => setPost({...post, title: e.target.value})}
            />
            <MyInput
                type="text"
                placeholder='Description'
                value={post.body}
                onChange={(e) => setPost({...post, body: e.target.value})}
            />
            <MyButton onClick={addPost}>Add post</MyButton>
        </form>
    );
};

export default PostForm;