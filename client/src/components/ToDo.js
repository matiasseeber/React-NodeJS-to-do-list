import React, { useState } from 'react'

function ToDo({ToDoInformation}) {
    const {_id, active, description} = ToDoInformation;
    const [isChecked, setChecked] = useState(active);
    const handleOnChange = () => {
        setChecked(!isChecked);
        fetch("http://localhost:8080/Api/" + _id, {
            "method": "PATCH",
            "body": JSON.stringify({"active":isChecked}),
            "headers": {
                "content-type": "application/json"
            }
        })
    }
    return (
        <li className="list-group-item border-0 d-flex align-items-center pl-4">
            <input onChange={handleOnChange} className="form-check-input me-3 bg-primary" type="checkbox" value="" aria-label="..." defaultChecked={isChecked} />
            {isChecked ? description : <s>{description}</s>}
        </li>
    )
}

export default ToDo