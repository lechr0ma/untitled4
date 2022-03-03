import React from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({posts, title, rem}) => {
    if(!posts.length){
        return (<h1 style={{textAlign: 'center'}}>No Posts</h1>)
    }else {
    return (
        <div>
            <h1 style={{textAlign:'center'}}>
                {title}
            </h1>
            <TransitionGroup>
                {posts.map( (e)=>
                    <CSSTransition
                        key={e.id}
                        timeout={500}
                        classNames='post'
                    >
                        <PostItem id={e.id} rem={rem}  post={e}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    )};
};

export default PostList;