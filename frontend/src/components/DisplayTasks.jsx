import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';
import { useState, useEffect } from 'react';
const DisplayTasks = ({ setShowAddTask, setEditTaskId }) => {
    const [tasks, settasks] = useState([])
    const [filters, setFilters] = useState({
        status: 'All',
        priority: 'All',
        category: 'All',
        sort: 'None'
    });
    useEffect(() => {
        console.log(filters)
    }, [filters])

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                let url = "http://localhost:3000/api"
                let newurl = url + '/getTasks'
                const res = await axios.get(newurl)

                settasks(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchTasks();

    }, [])
    const handleDelete = async (id) => {
        try {
            let url = "http://localhost:3000/api"
            let newurl = url + '/deleteTask'
            const res = await axios.post(newurl, { id })
            console.log(res.data)
            settasks(tasks.filter(task => task._id !== id))

        } catch (error) {
            console.log(error)
        }
    }
    const handleUpdate = (id) => {
        setEditTaskId(id)
        setShowAddTask(true)

    }
    const handleFilterChange = (filterType, value) => {
        setFilters(prev => ({
            ...prev,
            [filterType]: value,
        }));
    }
    return (
        <>
            <div className=' rounded-lg w-auto mt-2'>
                <div className='flex items-center justify-center gap-3   p-3 bg-slate-50   mx-auto w-3/4'>
                    <img src="./search.svg" alt="" />
                    <input type="text" id="search-navbar" className="block  border p-2 w-full text-sm text-gray-900  rounded-lg bg-gray-50 focus:outline-none" placeholder="Search..." />

                </div>
                <div className='flex items-center justify-evenly gap-5  p-3 bg-slate-50   mx-auto w-3/4'>
                    <div className='Staus select'>
                        <select
                            className="block w-full p-2 text-sm  border border-gray-300 rounded-lg font-semibold bg-blue-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            onChange={(e) => handleFilterChange('status', e.target.value)}
                        >
                            <option value="All">Status</option>
                            <option value="Pending">Pending</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>


                    <div className='Priority select'>
                        <select
                            className="block w-full p-2 text-sm border border-gray-300 rounded-lg font-semibold bg-blue-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            onChange={(e) => handleFilterChange('priority', e.target.value)}
                        >
                            <option value="All">Priority</option>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                    </div>


                    <div className='Category select'>
                        <select
                            className="block w-full p-2 text-sm border border-gray-300 rounded-lg font-semibold bg-blue-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            onChange={(e) => handleFilterChange('category', e.target.value)}
                        >
                            <option value="All">Category</option>
                            <option value="Work">Work</option>
                            <option value="Personal">Personal</option>
                            <option value="Academic">Academic</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>


                    <div className='Sort select'>
                        <select
                            className="block w-full p-2 text-sm border border-gray-300 rounded-lg font-semibold bg-blue-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            onChange={(e) => handleFilterChange('sort', e.target.value)}
                        >
                            <option value="None">Sort</option>
                            <option value="By due date">By due date</option>
                            <option value="By Created">By Created</option>
                        </select>
                    </div>
                </div>

            </div>

            <div className='Tasks'>
                {tasks.map((task, index) =>
                    // Add filtering condition here
                    ((filters.category === "All" || task.category === filters.category) &&
                        (filters.priority === "All" || task.priority === filters.priority) &&
                        (filters.status === "All" ||
                            (filters.status === "Completed" && task.completed === 1) ||
                            (filters.status === "Pending" && task.completed === 0))
                    ) && (
                        <div key={task._id || index} className="card flex flex-col gap-2 p-4 bg-slate-50 rounded-lg w-3/4 mx-auto mt-5">
                            <div className='flex items-center justify-between'>
                                <h2>{task.title}</h2>
                                <span className="operation flex items-center justify-center gap-3">
                                    <button type="button" className="flex justify-center items-center text-white bg-gradient-to-r from-green-400 to-green-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-3 py-2 text-center gap-3">
                                        Complete Task
                                    </button>

                                    <lord-icon
                                        src="https://cdn.lordicon.com/gwlusjdu.json"
                                        trigger="hover"
                                        colors="primary:#1591EA"
                                        style={{ width: "25px", height: "25px", cursor: "pointer" }}
                                        onClick={() => { handleUpdate(task._id) }}
                                    />

                                    <lord-icon
                                        src="https://cdn.lordicon.com/skkahier.json"
                                        trigger="hover"
                                        colors="primary:#1591EA"
                                        style={{ width: "25px", height: "25px", cursor: "pointer" }}
                                        onClick={() => { handleDelete(task._id) }}
                                    />
                                </span>
                            </div>

                            <p>{task.description || "No description."}</p>

                            <div className="info flex items-center justify-start gap-5">
                                <div className="tags flex items-center gap-2">
                                    Tags :
                                    {task.tags && task.tags.length > 0 ? (
                                        task.tags.map((tag, i) => (
                                            <div key={i} className='bg-blue-200 rounded-3xl p-2 w-auto text-[12px]'>{tag}</div>
                                        ))
                                    ) : (
                                        <div className='bg-gray-200 rounded-3xl p-2 w-auto text-[12px]'>No tags</div>
                                    )}
                                </div>

                                <div className="tags flex items-center gap-2">
                                    Category :
                                    <div className='bg-yellow-200 rounded-3xl p-2 w-auto text-[12px]'>{task.category || "No category"}</div>
                                </div>
                                <div className="tags flex items-center gap-2">
                                    Priority :
                                    <div className='bg-red-300 rounded-3xl p-2 w-auto text-[12px]'>{task.priority ||"No priority"}</div>
                                </div>

                                <div className="due">
                                    Due on {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : "N/A"}
                                </div>
                            </div>
                        </div>
                    )
                )}



            </div>
        </>
    )
}

export default DisplayTasks
