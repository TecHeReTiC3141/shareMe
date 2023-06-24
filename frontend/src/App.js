import React from 'react';
import {Router, Route, useNavigate, Routes} from "react-router-dom";
import Login from "./components/Login";
import Home from "./container/Home";


function App(props) {
    return (
        <Routes>

            <Route path="login" element={<Login />}/>
            <Route path="/" element={<Home />}/>
        </Routes>
    );
}

export default App;
