import React from 'react';

const SortSelect = ({options, value, set}) => {
    return (
        <div>
            <span>Sort by</span>
            <select
                style={{
                    outline: '2px solid teal',
                    border: 'none',
                    marginLeft: 10
                }}
                value={value}
                onChange={event => set(event.target.value)}
            >
                {options.map(e=>
                    <option key={e.value} value={e.value}>{e.body}</option>)}
            </select>
        </div>
    );
};

export default SortSelect;