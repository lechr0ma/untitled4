import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, title, rem}) => {
    if(!posts.length){
        return (<h1 style={{textAlign: 'center'}}>No Posts</h1>)
    }else {
    return (
        <div>
            <h1 style={{textAlign:'center'}}>
                {title}
            </h1>
            {posts.map( (e, index)=>
                <PostItem index={index} rem={rem} key={e.id} post={e}/>
            )}
        </div>
    )};
};

export default PostList;