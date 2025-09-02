import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
const AddTask = ({ setShowAddTask, editTaskId, setEditTaskId }) => {
     const [form, setform] = useState({
        title: "",
        description: "",
        priority: "",
        category: "",
        dueDate: null,
        tags: [],
        completed: false
    })
    useEffect(() => {
        const getTaskById = async() => {
            try {
                let url = "http://localhost:3000/api"
                let newurl = url + '/gettaskbyid'
                const res = await axios.get(`${newurl}/${editTaskId}`);

                
                setform({
                    title: res.data.title,
                    description: res.data.description,
                    priority: res.data.priority, 
                    category: res.data.category,
                    dueDate: res.data.dueDate ? res.data.dueDate.split("T")[0] : "",
                    tags: res.data.tags,
                    completed: res.data.completed
                })
            }
            catch (error) {
                console.log(error)
            }
        }
        getTaskById();
    }, [editTaskId])

   
    const handleSubmit = async () => {
        
        setShowAddTask(false);
        
        try {
            if (!editTaskId){
            let url = "http://localhost:3000/api"
            let newurl = url + '/addTask'
            const res = await axios.post(newurl, form)
            console.log(res.data)
            }
            else if (editTaskId){
            let url = "http://localhost:3000/api"
            let newurl = url + '/updateTask'
            const res = await axios.post(newurl, {form, id: editTaskId})
            console.log(res.data)
            }
        }
        catch (error) {
            console.log(error)
        }

    }
    return (
        <div className='card flex flex-col gap-3 p-4 bg-slate-50 rounded-lg w-2/4 mx-auto mt-5 text-left'>
            <h2 className='mx-auto'>Task</h2>
            <h4> Title</h4>
            <input type="text" className='border p-2 w-full text-sm text-gray-900  rounded-lg bg-gray-50 focus:outline-none' placeholder='Enter ask Title' value={form.title} onChange={(e) => { setform({ ...form, title: e.target.value }) }} />
            <h4> Description</h4>
            <input type="textarea" className='border p-2 w-full text-sm text-gray-900  rounded-lg bg-gray-50 focus:outline-none' placeholder='Enter Task Description' value={form.description} onChange={(e) => { setform({ ...form, description: e.target.value }) }} />
            <div className='flex items-center justify-evenly gap-5'>
                <div>
                    <h4>Priority</h4>
                    <Dropdown>
                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                            {form.priority || "Priority"}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => { setform({ ...form, priority: "High" }) }}>High</Dropdown.Item>
                            <Dropdown.Item onClick={() => { setform({ ...form, priority: "Medium" }) }}>Medium</Dropdown.Item>
                            <Dropdown.Item onClick={() => { setform({ ...form, priority: "Low" }) }}>Low</Dropdown.Item>


                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div>
                    <h4>Category</h4>
                    <Dropdown>
                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                            {form.category || "Category"}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => { setform({ ...form, category: "Work" }) }}>Work</Dropdown.Item>
                            <Dropdown.Item onClick={() => { setform({ ...form, category: "Personal" }) }}>Personal</Dropdown.Item>
                            <Dropdown.Item onClick={() => { setform({ ...form, category: "Academic" }) }}>Academic</Dropdown.Item>
                            <Dropdown.Item onClick={() => { setform({ ...form, category: "Other" }) }}>Other</Dropdown.Item>

                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
            <h4>Due Date</h4>
            <input type="date" className='border p-2 w-full text-sm text-gray-900  rounded-lg bg-gray-50 focus:outline-none' placeholder='Due Date' value={form.dueDate || ""} onChange={(e) => { setform({ ...form, dueDate: new Date(e.target.value) }) }} />
            <h4>Tags</h4>
            <input
                type="text"
                className="border p-2 w-full text-sm text-gray-900 rounded-lg bg-gray-50 focus:outline-none"
                placeholder="Enter Tags (comma separated)"
                value={form.tags.join(', ')}
                onChange={(e) => {
                    const tagsArray = e.target.value.split(',').map(tag => tag.trim());
                    setform({ ...form, tags: tagsArray });
                }}
            />            <button type="button" onClick={() => handleSubmit()} class="  flex justify-center items-center text-white bg-gradient-to-r from-green-400 to-green-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-3 py-2 text-center me-2 mb-2 gap-3">

                Submit

            </button>
        </div>
    )
}

export default AddTask
