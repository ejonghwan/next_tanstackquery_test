"use client"

import { useCreateTodo } from '@/store/queryies/todoQueries'
import React, { ChangeEvent, FormEvent, FormHTMLAttributes, useCallback, useEffect, useState } from 'react'





const TodoInput = () => {

    const generateRandomString = useCallback((length: number) => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters.charAt(randomIndex);
        }
        return result;
    }, [])



    const { mutate: todoMutate, isSuccess } = useCreateTodo()

    const [todoData, setTodoData] = useState({
        id: generateRandomString(10),
        title: '',
        content: '',
    })

    const handleChangeInput = (e: ChangeEvent<{ name: string, value: string }>) => {
        setTodoData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        todoMutate(todoData);
        setTodoData(prev => ({ id: prev.id + 1, title: '', content: '' }))
    }

    useEffect(() => {
        console.log('change? ', todoData)
    }, [todoData])

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input type="text" name="title" placeholder='title' value={todoData.title} onChange={handleChangeInput} />
                <input type="text" name="content" placeholder='content' value={todoData.content} onChange={handleChangeInput} />
                <button>gogo</button>
            </form>

        </div>
    )
}

export default TodoInput