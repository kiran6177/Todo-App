import React from 'react'

function Supporter(props) {

    const {head,task} = props

  return (
    <div className='todo-supporter'>
        <h4>{head}</h4>
        <div className='todo-body'>
            {
                task.length > 0 ?
                task.map(todo=>{
                    return(
                        <div key={todo.id} className='supporter-element'>
                        <p>{todo.data}</p>
                        </div>
                    )
                })
                : <p style={{fontSize:'12px',letterSpacing:'1px'}}>No tasks {head} yet!!</p>
            }

        </div>
      </div>
  )
}
export default Supporter