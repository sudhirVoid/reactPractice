import { useState,useEffect } from 'react'
import './App.css'
import { TodoProvider } from './contexts'
import TodoItem from './components/TodoItem'
import TodoForm from './components/TodoForm'
function App() {
  
  const [todos, setTodos] = useState([])
  const addTodo = (todo) => {
    setTodos((oldTodos) => [{id: Date.now(), ...todo}, ...oldTodos])
  }
  const updateTodo = (id, todo) => {
    setTodos((oldTodos) => oldTodos.map((oldTodo)=>(todo.id === id ? todo : oldTodo)
    ))
  }
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }
  const toggleComplete = (id) => {
    console.log("Inside toggle", id)

    // setTodos((prev) => 
    // prev.map((prevTodo) => 
    //   prevTodo.id === id ? { ...prevTodo, 
    //     completed: !prevTodo.completed } : prevTodo))

    setTodos((oldTodos)=>oldTodos.map((oldTodo)=>{
      if(oldTodo.id === id){
        
        return {...oldTodo, completed: !oldTodo.completed}
      }
      return {...oldTodo}
    }))
  }

  //access local storage.
  useEffect(() => {
    const todoLocal = JSON.parse(localStorage.getItem("myTodos"))
    if(todoLocal && todoLocal.length > 0){
      setTodos(todoLocal)
    }
  }, [])
  //we could have used todo as an dependency in that array
  //but the get is also getting executed so we make another useEffect
  
  useEffect(() => {
    localStorage.setItem("myTodos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {console.log("My Todos: " , todos)}
                        {todos.map((todo) => (
                          <div key={todo.id} className='w-full'>
                            <TodoItem todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
