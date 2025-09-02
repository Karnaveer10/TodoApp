import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

const DisplayTasks = () => {
    return (
        <>
            <div className=' rounded-lg w-auto mt-2'>
                <div className='flex items-center justify-center gap-3   p-3 bg-slate-50   mx-auto w-3/4'>
                    <img src="./search.svg" alt="" />
                    <input type="text" id="search-navbar" class="block  border p-2 w-full text-sm text-gray-900  rounded-lg bg-gray-50 focus:outline-none" placeholder="Search..." />

                </div>
                <div className='flex items-center justify-evenly gap-5  p-3 bg-slate-50   mx-auto w-3/4'>
                    <Dropdown>
                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                            Status
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item >Pending</Dropdown.Item>
                            <Dropdown.Item >Completed</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown>
                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                            Priority
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item >High</Dropdown.Item>
                            <Dropdown.Item >Low</Dropdown.Item>
                            <Dropdown.Item >Medium</Dropdown.Item>


                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                            Category
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item >Work</Dropdown.Item>
                            <Dropdown.Item >Personal</Dropdown.Item>
                            <Dropdown.Item >Academic</Dropdown.Item>
                            <Dropdown.Item >Other</Dropdown.Item>

                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                            Sort
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item >By due date</Dropdown.Item>
                            <Dropdown.Item >By Created</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

            </div>

            <div className='Tasks'>
                <div className="card flex flex-col gap-2 p-4 bg-slate-50 rounded-lg w-3/4 mx-auto mt-5 ">

                    <div className='flex items-center justify-between'>

                        <h2>Task 1</h2>
                        <span className="operation flex items-center justify-center gap-3">
                            <button type="button" class="  flex justify-center items-center text-white bg-gradient-to-r from-green-400 to-green-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-3 py-2 text-center me-2 mb-2 gap-3">

                                Complete Task

                            </button>
                            <lord-icon
                                src="https://cdn.lordicon.com/gwlusjdu.json"
                                trigger="hover"
                                colors="primary:#1591EA"

                                style={{ "width": "25px", "height": "25px", "cursor": "pointer" }}
                                onClick={() => { }}
                            >
                            </lord-icon>
                            <lord-icon
                                src="https://cdn.lordicon.com/skkahier.json"
                                trigger="hover"
                                colors="primary:#1591EA"
                                onClick={() => { }}
                                style={{ "width": "25px", "height": "25px", "cursor": "pointer" }}>
                            </lord-icon>
                        </span>
                    </div>

                    <p>description Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias tempora earum.</p>
                    <div className="info flex items-center justify-start gap-5">
                        <div className="tags flex items-center gap-2">Tags :
                            <div className='bg-blue-200 rounded-3xl p-2 w-auto text-[12px] '>work backend</div>
                        </div>
                        <div className="tags flex items-center gap-2">Category :
                            <div className='bg-yellow-200 rounded-3xl p-2 w-auto text-[12px] '>work</div>
                        </div>
                        <div className="due">Due on 12/2/34</div>
                    </div>




                </div>
            </div>
        </>
    )
}

export default DisplayTasks
