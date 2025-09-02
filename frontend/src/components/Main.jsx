import React from 'react'
import { useState } from 'react'
import Navbar from './Navbar'
import DisplayTasks from './DisplayTasks'
import AddTask from './AddTask'
const Main = () => {
    const [showAddTask, setShowAddTask] = useState(false);
    return (
        <>
            <Navbar  setShowAddTask={setShowAddTask} showAddTask={showAddTask} />
            {showAddTask ? <AddTask setShowAddTask={setShowAddTask} /> : <DisplayTasks />}
        </>
    )
}

export default Main
