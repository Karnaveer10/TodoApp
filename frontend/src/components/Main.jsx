import React from 'react'
import { useState } from 'react'
import Navbar from './Navbar'
import DisplayTasks from './DisplayTasks'
import AddTask from './AddTask'
const Main = () => {
    const [showAddTask, setShowAddTask] = useState(false);
    const [editTaskId, setEditTaskId] = useState("");

    return (
        <>
            <Navbar setShowAddTask={setShowAddTask} showAddTask={showAddTask} />
            {showAddTask ? <AddTask setShowAddTask={setShowAddTask} setEditTaskId={setEditTaskId} editTaskId={editTaskId} /> : <DisplayTasks setShowAddTask={setShowAddTask} setEditTaskId={setEditTaskId} />}
        </>
    )
}

export default Main
