import React from 'react'

interface TodoListProps {
    items: {id: number, text: string}[]
}

const TodoList: React.FC<TodoListProps> = (props) => {

    return (
        <>
        {props.items.map(todo => <li key={todo.id}>{todo.text}</li>)}

        </>
    )
}

export default TodoList