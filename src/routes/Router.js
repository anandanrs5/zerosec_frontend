import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../authentication/Login';
import Signup from '../authentication/Signup';
import Dashboard from '../component/Dashboard';

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path={"/"} element={<Login />} />
                <Route path={"/signup"} element={<Signup />} />
                <Route path={"/dashboard"} element={<Dashboard />} />
            </Routes>
        </div>
    )
}

export default Router;