import React from 'react'
const Navbar = () => {
    return (
        <div className='flex items-center justify-around mt-5 border border-gray-300 rounded-lg p-3 bg-slate-50'>
            <h1 className='font-bold text-5xl'>Clario</h1>
            <ul className='flex items-center justify-center gap-10'>
                <li><button><img src="/analytics.svg" alt="Analytics" className='w-12 hover:bg-slate-200 rounded-lg p-1' /></button></li>
                <li><button><img src="/theme.svg" alt="Theme" className='w-12 hover:bg-slate-200 rounded-lg p-1' /></button></li>
                <li><button type="button" class=" flex justify-center items-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-3 text-center me-2 mb-2 gap-3">

                    Add Task
                    
                </button>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
