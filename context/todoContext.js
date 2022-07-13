import { createContext, useContext, useState } from "react";

const TodoContext = createContext({});

export const TodoContextProvider = props => {
    const { children } = props;

    const initValue = [];

    return (
        <TodoContext.Provider value={useState(initValue)}>
            {children}
        </TodoContext.Provider>
    )
}

export const useTodoContext = () => {
    const [state, setState] = useContext(TodoContext);

    function addTodo(title, description) {
        setState(prev => [...prev, {
            id: prev.children,
            title,
            description,
            createdAt: new Date().toISOString(),
            status: "pending"
        }])
    }

    function removeTodo(id) {
        // SHOW
        setState(prev => prev.filter(v => v.id === id))
    }

    function changeTodoStatus(status, id) {
        // CHANGe
        setState(prev => prev.filter(v => v.id === id))
    }

    return {
        list: state,
        addTodo,
        removeTodo,
        changeTodoStatus
    }
} 