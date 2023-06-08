import { useEffect, useState } from "react"
import "../src/style.css"
import { NewTodoform } from "./NewTodoForm"
import { TodoNewCount } from "./TodoNewCount"
export default function App()
{
const[todos, setTodos]=useState(()=>{
  const localValue=localStorage.getItem("Items")
  if(localValue == null) return []
  return JSON.parse(localValue)
})

useEffect(()=>{
  localStorage.setItem("Items",JSON.stringify(todos))
},[todos])

function addTodo(title){
  setTodos(currentTodos =>{
            return [
              ...currentTodos,
              {id: crypto.randomUUID(), title, completed: false},
            ]
          })
}


function toggleTodo(id, completed){
  setTodos(currentTodos =>{
    return currentTodos.map(todo =>
      {
      if(todo.id==id){
        todo.completed=completed
        return {...todo, completed}
      }
      return todo
    })
  })
}

function deleteTodo(id){
  setTodos(currentTodos => {
    return currentTodos.filter(todo => todo.id !== id)
  })
}


  return (<>
  <NewTodoform onSubmit={addTodo}/>
  <h1 className="header">TODO list
  </h1>
  <TodoNewCount todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
  </>)
}