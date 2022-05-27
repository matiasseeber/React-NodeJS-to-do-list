import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Tasks from './components/tasks';


const allTaskList = ReactDOM.createRoot(document.getElementById('allTaskList'));

allTaskList.render(
    <Tasks />
);
