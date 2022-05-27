import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useState, useEffect } from 'react';

function Tasks() {
    const [tasks, setTasks] = useState([]);
    
    const fetchTasks = async () => {
        fetch("http://localhost:8080/Api")
            .then((res) => res.json())
            .then((data) => setTasks(data))
    }

    useEffect(() => {
        fetchTasks();
    }, [])
    
    return (
        <>
        {
            tasks.map((task) => {
                return  <li id={"ListItem" + task._id} className="list-group-item d-flex align-items-center justify-content-space-evenly border-0 mb-2 rounded">
                            <input id={"CheckBox" + task._id} className="form-check-input me-2 bg-primary" type="checkbox" value="" defaultChecked={true} aria-label="..."/>
                            <p id={"P" + task._id} className='ml-2 mb-0'>{task.description}</p>
                        </li>
            })
        }
        </>
    )
}

export default Tasks