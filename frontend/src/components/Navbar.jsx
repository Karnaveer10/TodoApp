import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
const Navbar = ({ setShowAddTask, showAddTask, showAnalytics, setShowAnalytics }) => {
    const [user, setUser] = useState(null);


    // const handleGoogleLogin = async (idToken) => {
    //     try {

    //         const res = await axios.post('http://localhost:3000/api/google-login', { idToken });
    //         console.log('Login Success:', res.data);
    //         localStorage.setItem('token', res.data.token);
    //         setUser(res.data.user);
    //     } catch (err) {
    //         console.error('Login error', err);
    //     }
    // };

    return (
        <div className="flex flex-col md:flex-row items-center justify-around mt-2 border border-gray-300 rounded-lg p-3 bg-slate-50">
            <h1 className='font-bold text-5xl'>Clario</h1>
            <ul className='flex items-center justify-center gap-10'>
                <li><button><img src="/analytics.svg" onClick={() => {
                    setShowAnalytics(true)
                    setShowAddTask(false)
                }} alt="Analytics" className='w-12 hover:bg-slate-200 rounded-lg p-1' /></button></li>
                <li><button type="button" onClick={() => setShowAddTask(true)} disabled={showAddTask || showAnalytics} className=" flex disabled:opacity-50 disabled:cursor-not-allowed justify-center items-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-3 text-center me-2 mb-2 gap-3">

                    Add Task

                </button>
                </li>
                {/* <div>
                    {user ? (
                        <div>
                            <h4>Welcome, {user.name}</h4>
                            <button onClick={() => {
                                setUser(null);
                                localStorage.removeItem('token');
                            }}>
                                Logout
                            </button>
                        </div>
                    ) : (
                        <GoogleLogin
                            onSuccess={credentialResponse => {
                                handleGoogleLogin(credentialResponse.credential);
                            }}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                        />
                    )}
                </div> */}
            </ul>
        </div>
    )
}

export default Navbar
