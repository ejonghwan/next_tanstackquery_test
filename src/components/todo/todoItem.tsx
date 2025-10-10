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
      <>
         <div>{todo.id}</div>
         <div>{todo.title}</div>
         <div>{todo.content}</div>
      </>
   )
}

export default TodoItem