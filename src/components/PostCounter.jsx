import React from 'react';
import MyButton from "./UI/buttons/MyButton";

const PostCounter = ({pagesArray, pages, setPages}) => {
    console.log('a')
    return (
        <div style={{margin: '30px 0'}}>
            {pagesArray.length
            &&
            pagesArray.map((e) =><MyButton
                style={e === pages.current ? {backgroundColor: 'teal', color: 'white'}: {}}
                key={e}
                onClick={() => setPages({...pages, current: e })}
            >
                {e}
            </MyButton>)}
        </div>
    );
};

export default PostCounter;