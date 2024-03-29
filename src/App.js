import { useState, useEffect } from 'react';
import './App.css';
import Footer from './MyComponents/Footer';
import Header from './MyComponents/Header';
import {Todos} from './MyComponents/Todos';
import {AddTodo} from './MyComponents/AddTodo';

function App() {
  let initTodo;
if(localStorage.getItem("todos")===null){
  initTodo = [];
}
else{
  initTodo = JSON.parse(localStorage.getItem("todos"));
}

const onDelete = (todo) => {
  console.log("Deleted Item ", todo)

  setTodos(todos.filter((e)=>{
    return e!= todo;
  }))
  localStorage.setItem("todos", JSON.stringify(todos))
}

const addTodo =(title, desc) => {
  console.log("I am adding this todo - ", title, desc)
  let sno;
  if(todos.length==0){
    sno = 0
  }
  else{
    sno = todos[todos.length-1].sno+1;

  }

  const myTodo = {
    sno:sno,
    title:title,
    desc:desc
  };
  console.log(sno, myTodo);
  setTodos([...todos, myTodo])
}
const [todos, setTodos] = useState(initTodo);
useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos))
}, [todos])


  return (
    <div className="App">
        <Header />
        <AddTodo addTodo={addTodo}/>
        <Todos todos={todos} onDelete={onDelete}/>
        <Footer />
    </div>
  );
}

export default App;
