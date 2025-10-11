import React from 'react'
import TodoItem from './todoItem'
import TodoInput from './todoInput';


interface Props {
   data: { id: number; title: string; content: string }[];
}


const TodoWrap = ({ data }: Props) => {

   console.log('data?', data)



   return (
      <div className='todo_wrap'>
         <TodoInput />

         <div>{data?.map(item => <TodoItem key={item.id} todo={item} />)}</div>

      </div>
   )
}

export default TodoWrap