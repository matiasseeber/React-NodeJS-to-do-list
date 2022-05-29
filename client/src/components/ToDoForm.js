import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useState } from 'react'

function ToDoForm(props) {
    const [txt, setTxt] = useState();

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            description: txt
        })

        setTxt("");
    }

    const handleInputChange = (e) => setTxt(e.target.value)

    return (
        <form className="d-flex justify-content-center align-items-center mb-4" action="http://localhost:8080/Api" method="post" onSubmit={handleSubmit}>
            <div className="form-outline flex-fill">
                <input type="text" id="form2" className="form-control" value={txt} onChange={handleInputChange}/>
            </div>
            <button type="submit" className="btn btn-success ms-2">Add</button>
        </form>
    )
}

export default ToDoForm