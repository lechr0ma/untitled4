import React from 'react';
import SortSelect from "./UI/select/SortSelect";
import MyInput from "./UI/input/MyInput";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <SortSelect
                value={filter.sort}
                set={(e) => setFilter({...filter, sort: e})}
                options={[
                    {value: 'title', body: 'title'},
                    {value: 'body', body: 'description'}
                ]}
            />
            <MyInput value={filter.search}
                     onChange={(e) => setFilter({...filter, search: e.target.value})}
                     placeholder='Search...'
            />
        </div>
    );
};

export default PostFilter;