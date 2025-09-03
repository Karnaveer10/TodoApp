import React from 'react'
import { useState } from 'react'
import Navbar from './Navbar'
import DisplayTasks from './DisplayTasks'
import AddTask from './AddTask'
import Analytics from './Analytics'
const Main = () => {
    const [showAddTask, setShowAddTask] = useState(false);
    const [editTaskId, setEditTaskId] = useState("");
    const [showAnalytics, setShowAnalytics] = useState(false);

    return (
        <>
            <Navbar setShowAddTask={setShowAddTask} showAddTask={showAddTask} showAnalytics={showAnalytics} setShowAnalytics={setShowAnalytics} />
            {showAnalytics ? (<Analytics setShowAnalytics={setShowAnalytics} showAnalytics={showAnalytics}/>) : showAddTask ? (<AddTaskset ShowAddTask={setShowAddTask} setEditTaskId={setEditTaskId} editTaskId={editTaskId} />) : (<DisplayTasks setShowAddTask={setShowAddTask} setEditTaskId={setEditTaskId} />
            )}        
            </>
    )
}

export default Main
