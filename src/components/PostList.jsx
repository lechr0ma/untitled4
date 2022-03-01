import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, title}) => {

    return (
        <div>
            <h1 style={{textAlign:'center'}}>
                {title}
            </h1>
            {posts.map( e=>
                <PostItem key={e.id} post={e}/>
            )}
        </div>
    );
};

export default PostList;