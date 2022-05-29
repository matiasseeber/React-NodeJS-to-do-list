import React, { useState, useEffect } from 'react'
import ToDo from './ToDo';
import ToDoForm from './ToDoForm'

function ToDoList() {
    const [toDos, setToDos] = useState([]);

    const addTodo = todo => {
        const newTodos = [todo, ...toDos];
        fetch("http://localhost:8080/Api/", {
            "method": "POST",
            "body": JSON.stringify(todo),
            "headers": {
                "content-type": "application/json"
            }
        })
            .then(() => {
                setToDos(newTodos);
                console.log(toDos)
            })
    }

    useEffect(() => {
        fetch("http://localhost:8080/Api/")
            .then((response) => response.json())
            .then((data) => setToDos(data))
    }, [])


    return (
        <>
            <ToDoForm  onSubmit={addTodo}/>
            <ul className="list-group rounded-0">
                {
                    toDos.map((task) =>
                        <ToDo key={task._id} ToDoInformation={task} />
                    )
                }
            </ul>
        </>
    )
}

export default ToDoList