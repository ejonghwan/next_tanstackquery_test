"use client"

import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'



const Page = () => {


   const [text, setText] = useState('')

   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setText(e.target.value)
   }

   let b = 0
   const obj = {
      a: 0
   }

   // console.log(obj.a)
   // console.log(b++)
   const add = () => {
      console.log(b, obj)
      b++
      obj.a++
   }


   // const handle = () => {
   //    console.log(`123`) // 계속 실행됨. 참조값을 담기떄문 
   // }

   const handle = useCallback(() => {
      // console.log(`123`)
   }, [])

   useEffect(() => {
      handle()
   }, [handle])


   useEffect(() => { console.log(b) }, [b])





   return (
      <div>

         <input type="text" onChange={handleChange} value={text} />
         zz : {text}
         obj : {obj.a}

         <button type='button' onClick={add}>{b}++</button>

      </div>
   )
}

export default Page