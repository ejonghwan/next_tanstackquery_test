import React from 'react'
import TodoItem from './todoItem'


interface Props {
   data: { id: number; title: string; content: string }[];
}


const TodoWrap = ({ data }: Props) => {

   console.log('data?', data)

   return (
      <div>
         {data?.map(item => <TodoItem key={item.id} todo={item} />)}
      </div>
   )
}

export default TodoWrap