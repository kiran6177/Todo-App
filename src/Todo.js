import React, { useState ,useEffect} from "react";
import TodoElement from "./TodoElement";
import Supporter from "./Supporter";
import TodoEdit from "./TodoEdit";

function Todo() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [day,setDay] = useState('');
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const addTask = ()=>{
    setTodos([...todos,
      {id:todos.length+1,
      data:value,
      status:false,
      isEditing:false}])
      setValue("")
  }

  const statusChange = (data,id) => {
    setTodos(
      todos.map((todo1) => {
        if (todo1.id === id) {
          todo1.status = data;
        }
        return todo1;
      })
    );
  };
  const deleteTask = (todo)=>{
    setTodos(todos.filter(todo1=>todo1.id !== todo.id))
  }

  const editTask = (todo)=>{
    todos.forEach(todo1=>{
      if(todo1.id === todo.id){
        todo1.isEditing = true
      }})
      setTodos([...todos])
  }

  const handleEdit = (todo,value)=>{
    todos.forEach(todo1=>{
      if(todo1.id === todo.id){
        todo1.data = value
        todo1.isEditing = false
      }
    })
    setTodos([...todos])
  } 

  useEffect(() => {
    const getToday = () =>{
        const date = new Date()
        const today = date.getDay()
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        return days[today]
    }
    const today = getToday()
    setDay(today)
  }, []);

  return (
    <div className="todo-enclosed">
      <Supporter head={'Completed'} task={todos.filter(todo=>todo.status===true)} />
      <div className="todo-outer">
      <p style={{color:'#1d3557'}}>Hey it's {day} !!</p>
        <h1 style={{ textAlign: "center", letterSpacing: "5px" }}>
          Get things done!!
        </h1>
        <div className="todo-list">
          <div className="todo-head">
            <input
              type="text"
              value={value}
              onChange={handleChange}
              placeholder="Enter your task here"
            ></input>
            <button type="button" onClick={addTask}>
              ADD TASK
            </button>
          </div>
          {todos.map((todo) => {
            if(todo.isEditing){
              return(
                <TodoEdit key={todo.id} data={todo} editTask={handleEdit}/>  
              )
            }else{
              return (
                <TodoElement
                  key={todo.id}
                  data={todo}
                  handleDelete={() => deleteTask(todo)}
                  handleChange={statusChange}
                  handleEdit={()=> editTask(todo)}
                />
              );
            }
            
          })}
        </div>
      </div>
      <Supporter head={'Pending'} task={todos.filter(todo=>todo.status === false)} />
    </div>
  );
}
export default Todo;
