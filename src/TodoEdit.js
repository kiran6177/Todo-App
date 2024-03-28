import React, { useState } from 'react'

function TodoEdit(props) {
    const {editTask ,data} = props
    const [value,setValue] = useState(data.data)

    const handleChange = (e)=>{
        setValue(e.target.value)
    }

  return (
    <div className="todo-head">
            <input
              type="text"
              value={value}
              onChange={(e)=>handleChange(e)}
              placeholder="Enter your task here"
            ></input>
            <button type="button" onClick={()=>editTask(data,value)}>
              EDIT TASK
            </button>
          </div>
  )
}
export default TodoEdit