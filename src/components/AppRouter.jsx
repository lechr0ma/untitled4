import React from 'react';
import {Route, Routes} from "react-router-dom";
import PostPage from "../pages/PostPage";
import Error from "../pages/Error";
import About from "../pages/About";

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/posts' element={<PostPage/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='*' element={<Error/>}/>
        </Routes>
    );
};

export default AppRouter;