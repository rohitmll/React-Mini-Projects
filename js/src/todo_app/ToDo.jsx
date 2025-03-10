import React, { useState } from 'react'

function ToDo() {
    const [task,setTask] = useState("")
    const [tasks,setTasks] = useState([])
    const [errors,setErrors] = useState("")

    const handleChange =(e)=>{
        setTask(e.target.value)
    }

    const addTask = ()=>{
        if(task.trim()==="") return setErrors("Can't be empty");
       setTasks((prev)=>([ ...prev,task]))
       setTask("")
       setErrors("")
        
    }
    const removeTask =(index)=>{
        setTasks((value)=> value.filter((_,i)=>i !== index))
    }
  return (
    <>
   
    <div>
        <div>Task</div>
        <input 
        type='text'
        value={task}
        onChange={handleChange}
        />
        <button onClick={addTask}>Add Task</button>
    </div>
    {errors && <div>{errors}</div>}
    <div>
        <div><b>All Tasks</b></div>
             <ol >
             {tasks?.map((value,i)=>(
               
                <li key={i}>{value}
                <button onClick={()=>removeTask(i)}>Delete</button>
                {/* <button onClick={()=>updateTask(i)}>Update</button> */}
                </li>
            
            ))}
             </ol>
       
       
    </div>
    </>
  )
}

export default ToDo