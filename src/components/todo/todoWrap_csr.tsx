'use client'

import React from 'react'
import TodoItem from './todoItem'
import TodoInput from './todoInput';
import { useTodoAllList } from '@/store/queryies/todoQueries'

interface Props {
   data: { id: number; title: string; content: string }[];
}


// const TodoWrap = ({ data }: Props) => {
const TodoWrap = () => {

   // csr test
   const { data: todoData, isError: todoError, isSuccess: todoSuccess, isLoading: todoLoading } = useTodoAllList()

   console.log('todoData?', todoData)

   return (
      <div className='todo_wrap'>
         <TodoInput />

         <div>{todoData?.data?.map((item: { id: string; title: string; content: string }) => <TodoItem key={item.id} todo={item} />)}</div>

      </div>
   )
}

export default TodoWrap