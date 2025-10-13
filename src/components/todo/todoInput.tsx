"use client"

import React, { ChangeEvent, FormEvent, FormHTMLAttributes, useEffect, useState } from 'react'

const TodoInput = () => {

    const [todoData, setTodoData] = useState({
        title: '',
        content: '',
    })

    const handleChangeInput = (e: ChangeEvent<{ name: string, value: string }>) => {
        setTodoData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();


    }

    useEffect(() => {
        console.log(todoData)
    }, [todoData])

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input type="text" name="title" placeholder='title' onChange={handleChangeInput} />
                <input type="text" name="content" placeholder='content' onChange={handleChangeInput} />
                <button>gogo</button>
            </form>

        </div>
    )
}

export default TodoInput