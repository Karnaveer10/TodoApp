import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';
const AddTask = () => {
    const [form, setform] = useState({
        title: "",
        description: "",
        priority: "",
        category:"",
        dueDate:null,
        tags:""
    })
    const handleSubmit=async()=>{
        console.log(form);
    }
    return (
        <div className='card flex flex-col gap-3 p-4 bg-slate-50 rounded-lg w-2/4 mx-auto mt-5 text-left'>
            <h2 className='mx-auto'>Task</h2>
            <h4> Title</h4>
            <input type="text" className='border p-2 w-full text-sm text-gray-900  rounded-lg bg-gray-50 focus:outline-none' placeholder='Enter ask Title' value={form.title} onChange={(e)=>{setform({...form,title:e.target.value})}}/>
            <h4> Description</h4>
            <input type="textarea" className='border p-2 w-full text-sm text-gray-900  rounded-lg bg-gray-50 focus:outline-none' placeholder='Enter Task Description'  value={form.description} onChange={(e)=>{setform({...form,description:e.target.value})}}/> 
            <div className='flex items-center justify-evenly gap-5'>
                <div>
                    <h4>Priority</h4>
                    <Dropdown>
                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                            {form.priority || "Priority"}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => {setform({...form,priority:"High"})}}>High</Dropdown.Item>
                            <Dropdown.Item onClick={() => {setform({...form,priority:"Medium"})}}>Medium</Dropdown.Item>
                            <Dropdown.Item onClick={() => {setform({...form,priority:"Low"})}}>Low</Dropdown.Item>


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
                            <Dropdown.Item onClick={() => {setform({...form,category:"Work"})}}>Work</Dropdown.Item>
                            <Dropdown.Item onClick={() => {setform({...form,category:"Personal"})}}>Personal</Dropdown.Item>
                            <Dropdown.Item onClick={() => {setform({...form,category:"Academic"})}}>Academic</Dropdown.Item>
                            <Dropdown.Item onClick={() => {setform({...form,category:"Other"})}}>Other</Dropdown.Item>

                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
            <h4>Due Date</h4>
            <input type="date" className='border p-2 w-full text-sm text-gray-900  rounded-lg bg-gray-50 focus:outline-none' placeholder='Due Date'  valeu={form.dueDate ? form.dueDate.toISOString().split("T")[0] : ""}  onChange={(e)=>{setform({...form,dueDate: new Date(e.target.value) })}}/>
            <h4>Tags</h4>
            <input type="text" className='border p-2 w-full text-sm text-gray-900  rounded-lg bg-gray-50 focus:outline-none' placeholder='Enter Tags'  value={form.tags} onChange={(e)=>{setform({...form,tags:e.target.value})}}/> 
            <button type="button" onClick={()=>handleSubmit()}class="  flex justify-center items-center text-white bg-gradient-to-r from-green-400 to-green-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-3 py-2 text-center me-2 mb-2 gap-3">

                Submit

            </button>
        </div>
    )
}

export default AddTask
