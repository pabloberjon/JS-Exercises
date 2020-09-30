import React from "react";

function Input(props) {
    return(
        <form onSubmit={props.handleSubmit}>
            <input 
                value={props.newTask} 
                onChange={props.handleTaskChange} 
                type="text" 
                className="new-task"
            />
        </form>
    )
}

export default Input;