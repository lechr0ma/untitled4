import React from 'react';
import MyButton from "./UI/buttons/MyButton";

const PostItem = (props) => {
    function removePost() {
        props.rem(props.post)
    }
    return (
        <div className='post'>
            <div className='post__content'>
                <strong>{props.post.id}{props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className='post__buttons'>
                <MyButton onClick={removePost}>Delete</MyButton>
            </div>
        </div>
    );
};

export default PostItem;