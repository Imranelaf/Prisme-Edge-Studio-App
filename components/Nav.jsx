"use client"
import { useState, useEffect } from 'react';

import Login from "@/components/login.jsx";
import Logout from "@/components/logout.jsx";


export default function Nav() {
    const [light, setLight] = useState(false);
    const isLoggedIn = true;

    // Update the document class to toggle dark mode
    useEffect(() => {
        if (light) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [light]);

    return (
        <div className="w-full h-auto p-8 bg-white dark:bg-gray-800 shadow-md flex justify-between items-center">
            <div className="bg-white rounded-[20%]">
                <img src="./images/logo.svg" alt="Logo" width={80} hiegth={80}/>
            </div>
            <button
                className="w-8 h-8 p-2 bg-gray-800 text-white dark:bg-white dark:text-gray-800 rounded-md"
                onClick={() => setLight(prev => !prev)}
            >
                {light ? "𖤓" : "☾"}
            </button>
            <div className="flex space-x-4">
                {isLoggedIn ? <Logout /> : <Login />}
            </div>
        </div>
    );
}
