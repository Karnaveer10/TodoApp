import React from 'react'
import { ProgressBar } from 'react-bootstrap';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { BarChart } from '@mui/x-charts/BarChart';

const Analytics = ({ setShowAnalytics, showAnalytics, setShowAddTask }) => {
    const [tasks, settasks] = useState([])
    const [counters, setCounters] = useState({
        Total: { total: 0, completed: 0 },
        High: { total: 0, completed: 0 },
        Medium: { total: 0, completed: 0 },
        Low: { total: 0, completed: 0 },
        Work: { total: 0, completed: 0 },
        Academic: { total: 0, completed: 0 },
        Personal: { total: 0, completed: 0 },
        Other: { total: 0, completed: 0 },
    });
    useEffect(() => {
        const fetchTasks = async () => {
            try {

                const res = await axios.get("http://localhost:3000/api/getTasks");
                const tasks = res.data;

                const newCounters = {
                    Total: { total: 0, completed: 0 },
                    High: { total: 0, completed: 0 },
                    Medium: { total: 0, completed: 0 },
                    Low: { total: 0, completed: 0 },
                    Work: { total: 0, completed: 0 },
                    Academic: { total: 0, completed: 0 },
                    Personal: { total: 0, completed: 0 },
                    Other: { total: 0, completed: 0 },
                };

                tasks.forEach(task => {
                    newCounters.Total.total += 1;
                    if (task.completed) newCounters.Total.completed += 1;

                    if (task.priority) {
                        newCounters[task.priority].total += 1;
                        if (task.completed) newCounters[task.priority].completed += 1;
                    }

                    if (task.category) {
                        newCounters[task.category].total += 1;
                        if (task.completed) newCounters[task.category].completed += 1;
                    }
                });

                setCounters(newCounters);
                console.log(newCounters);
            } catch (error) {
                console.log(error);
            }
        };

        fetchTasks();
    }, []);

    return (
        <>

            <h2 className='text-center mb-4 mt-4'>Tasks Left</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6 w-3/4 mx-auto">
                {Object.entries(counters).map(([key, value]) => {
                    const remaining = value.total - value.completed;
                    const progress = value.total ? ((value.completed / value.total) * 100) : 0;
                    console.log(progress);

                    return (
                        <div key={key} className="bg-white shadow p-4 rounded">
                            <h3 className="font-semibold">{key}</h3>
                            <p>{remaining} remaining / {value.total} total</p>
                            <ProgressBar now={progress} />
                        </div>
                    );
                })}
            </div>

            <h2 className='text-center mb-4 mt-4'>Tasks Completed</h2>

            <BarChart className='w-3/4 mx-auto mb-6'
                xAxis={[{ data: ['Work', 'Personal', 'Academic', 'Other'] }]}
                series={[
                    {
                        data: [
                            counters.Work.completed,
                            counters.Personal.completed,
                            counters.Academic.completed,
                            counters.Other.completed
                        ]
                    }
                ]}
                height={300} />


            <div className="flex justify-center">
                <button type="button" onClick={() => {
                    setShowAnalytics(false);
                    setShowAddTask(false);
                }} className="   text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-3 text-center me-2 mb-2 gap-3 ">

                    Back

                </button>
            </div>


        </>
    )
}

export default Analytics
