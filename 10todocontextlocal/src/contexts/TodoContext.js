import { createContext } from "react";
import { useContext } from "react";

//create the context first. in context we just define functionality not logic. Like we define addTodo which we know is a function but dont know what it does. we define logic in some other file
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo message.",
            completed: false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

// provider for the Context. we just write here so that we dont need to do TodoContext.Provider.
export const TodoProvider = TodoContext.Provider;

// making a simple hook that returns the useContext of the Context we build.
export const useTodo = () => {
    return useContext(TodoContext)
}