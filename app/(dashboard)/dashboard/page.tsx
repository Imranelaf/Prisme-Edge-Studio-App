'use client';
import React, { useState } from 'react';
import Games from '@/components/dashboard/Games';
import Statistics from '@/components/dashboard/Statistics';
import Users from '@/components/dashboard/Users';

function Dashboard() {
    const [state, setState] = useState('Welcome');

    const renderContent = () => {
        switch (state) {
            case 'Games':
                return <Games />;
            case 'Users':
                return <Users />;
            case 'Statistics':
                return <Statistics />;
            default:
                return <h1 className="text-white text-center">Welcome to the Dashboard</h1>;
        }
    };

    return (
        <div className="h-screen w-full flex">
            <div className="h-screen w-1/6 bg-black flex flex-col items-center">
                <h1 className="text-white text-lg font-bold m-4">Dashboard</h1>
                {['Games', 'Users', 'Statistics'].map((btn) => (
                    <button
                        key={btn}
                        className="bg-blue-500 m-2 w-4/5 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
                        onClick={() => setState(btn)}
                    >
                        {btn}
                    </button>
                ))}
            </div>
            <div className="min-h-screen h-auto w-5/6 bg-indigo-300">
                {renderContent()}
            </div>
        </div>
    );
}

export default Dashboard;
