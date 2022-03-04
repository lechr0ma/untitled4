import React from 'react';
import MyButton from "./UI/buttons/MyButton";

const PostCounter = ({pagesArray, pages, setPages}) => {
    console.log('a')
    return (
        <div className='post__counter'>
            {pagesArray.length
            &&
            pagesArray.map((e) =><MyButton
                style={e === pages.current ? {backgroundColor: '#2A9D8F', color: 'white'}: {}}
                key={e}
                onClick={() => setPages({...pages, current: e })}
            >
                {e}
            </MyButton>)}
        </div>
    );
};

export default PostCounter;