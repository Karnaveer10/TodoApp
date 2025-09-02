import React from 'react'

const DisplayTasks = () => {
    return (
        <>
            <div>
                <div className='flex items-center justify-center gap-3  rounded-lg p-3 bg-slate-50 mt-5 border border-black  mx-auto w-3/4'>
                    <img src="./search.svg" alt="" />
                    <input type="text" id="search-navbar" class="block p-2 w-full text-sm text-gray-900  rounded-lg bg-gray-50 focus:outline-none" placeholder="Search..." />

                </div>
                <div>
                    
                </div>
            </div>
        </>
    )
}

export default DisplayTasks
