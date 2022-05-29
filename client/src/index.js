import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom/client';
import ToDoList from './components/ToDoList';

const allTaskList = ReactDOM.createRoot(document.getElementById('toDoContainer'));

allTaskList.render(
    <>
        <p className="mb-2"><span className="h2 me-2">To Do List</span> <span
            className="badge bg-danger">checklist</span></p>
        <ToDoList />
    </>
);
