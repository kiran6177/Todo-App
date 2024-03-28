import React from 'react'

function TodoElement(props) {
  const {data,handleChange,handleDelete,handleEdit} = props
  return (
    <div className='todo-element'>
      <div className='todo-data'>
      <input type='checkbox'  checked={data.status} onChange={(e)=>handleChange(e.target.checked,data.id)}></input>
      <p style={{textAlign:'left'}}>{data.data}</p>
      </div>
      <div className='icons'>
      <i className="fa-solid fa-pen-to-square" onClick={handleEdit}></i>
      <i className="fa-solid fa-trash" onClick={handleDelete}></i>
      </div>
    </div>
  )
}

export default TodoElement
