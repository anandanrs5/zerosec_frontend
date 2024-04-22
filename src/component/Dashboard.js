import React from 'react';
import Timer from './Timer';
import Header from './Header';
import DisplayWorkStatus from './DisplayWorkStatus';

const Dashboard = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <div className='header bg-gray-800 '>
                <Header /></div>
            <div className='body flex-grow'>
                <Timer />
                <DisplayWorkStatus />
            </div>
            <div className='footer bg-gray-800 text-white py-4 text-center text-2xl'>&copy; 2024 Zerosec</div>
        </div>
    )
}

export default Dashboard;
