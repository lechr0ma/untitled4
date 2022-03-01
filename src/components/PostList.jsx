import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, title, rem}) => {

    return (
        <div>
            <h1 style={{textAlign:'center'}}>
                {title}
            </h1>
            {posts.map( e=>
                <PostItem rem={rem} key={e.id} post={e}/>
            )}
        </div>
    );
};

export default PostList;