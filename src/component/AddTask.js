import { useState } from "react"

function AddTask({updateTodos}) {
    const [task, setTask] = useState()
    const handleChange = (e) => {
        //console.log(e.target.value);
        setTask(e.target.value);
    }
    const addTask = (e) => {
        //console.log(task)
        updateTodos(task);
        setTask("")
    }
    
    return(
        <div>
            <input id="input" type="text" placeholder="add task" onChange={e => handleChange(e)} value={task}/>
            <button onClick={e => addTask(e)}>Add</button>
        </div>
    )
}

export default AddTask;