"use client"

import React, { ChangeEvent, useEffect, useState } from 'react'

const TodoInput = () => {

    const [todoData, setTodoData] = useState({
        title: '',
        content: '',
    })

    const handleChangeInput = (e: ChangeEvent<{ name: string, value: string }>) => {
        setTodoData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    useEffect(() => {
        console.log(todoData)
    }, [todoData])

    return (
        <div>
            <input type="text" name="title" placeholder='title' onChange={handleChangeInput} />
            <input type="text" name="content" placeholder='content' onChange={handleChangeInput} />
        </div>
    )
}

export default TodoInput