import React from 'react'

interface Props {
   todo: {
      id: number;
      title: string;
      content: string;
   }
}

const TodoItem = ({ todo }: Props) => {
   return (
      <div className='todo_item'>
         <div>id: {todo.id}</div>
         <div>title: {todo.title}</div>
         <div>content: {todo.content}</div>
      </div>
   )
}

export default TodoItem