import { createSlice, nanoid } from "@reduxjs/toolkit";

//1. create initial state
const initialState = {

    todos : [{id:1 , text:"redux-todo"}]
}


//2. create slice       createSlice({name: string, initialState: {object} , reducers: {object} })
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {

        //in context API we declare function, in redux we have to define the function
        //access to state and action
        addTodo: (state, action) => {

            //created todo
            const todo =  {
            
                id: nanoid(),
                text: action.payload        //action is a object
            }

            //adding new todo in initialState
            state.todos.push(todo)

        },     
        
        //removeTodo
        removeTodo: (state, action) => {

            //matching the id of todos
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
            
        }

    }
})

//3. export all the functions inside reducer
export const { addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer

