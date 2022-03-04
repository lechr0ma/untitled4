import React from 'react';
import MyButton from "./buttons/MyButton";
import {useNavigate} from "react-router-dom";

const Navbar = () => {
    const hist = useNavigate()
    return (
        <div className='navbar'>
            <div className="navbar__links">
                <MyButton onClick={() => hist('/posts')}>Posts</MyButton>
                <MyButton onClick={() => hist('/about')}>About</MyButton>
            </div>
        </div>
    );
};

export default Navbar;