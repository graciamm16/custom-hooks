import { useEffect, useMemo, useReducer } from "react";
import { todoReducer } from "../8-useReducer/TodoReducer";

const initialState = [];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    //Guarda la lista de todos en el localStorage cada vez que la lista de los TODOS cambia.
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispatch(action);
    }

    const handleDeleteTodo = (id) => {
        // console.log({id});
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });
    }

    const handleToggleTodo = (id) => {
        // console.log({id});
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        });
    }

    const todosCount = useMemo(() => todos.length, [todos]);

    const pendingTodosCount = useMemo(() => todos.filter(todo => !todo.done).length, [todos]);

    return{
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount,
        pendingTodosCount
    };
}