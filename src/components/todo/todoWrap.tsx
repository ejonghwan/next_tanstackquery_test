'use client'

import React from 'react'
import TodoItem from './todoItem'
import TodoInput from './todoInput';
import { useTodoAllList_ssr } from '@/store/queryies/todoQueries';


interface Props {
   data: { id: number; title: string; content: string }[];
}


// const TodoWrap = ({ data }: Props) => {
const TodoWrap = () => {

   // console.log('data?', data)

   const { data } = useTodoAllList_ssr()

   console.log('todo wrap data?', data)



   return (
      <div className='todo_wrap'>
         <TodoInput />

         <div>{data?.map((item: { id: number; title: string; content: string }) => <TodoItem key={item.id} todo={item} />)}</div>

      </div>
   )
}

export default TodoWrap