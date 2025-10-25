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



   const [tt, setTT] = useState<{ a: number, b: number, c: number }>({ a: 0, b: 0, c: 0 })

   useEffect(() => {
      // setTT({ a: 1, b: 4 })
      // setTT(prev => ({ ...prev, b: 4, c: 5 }))
      handleClick()
   }, [])

   const handleClick = () => {
      setTT(prev => ({ ...prev, b: 4, c: 5 }))
   }

   const [in, setIn] = useState()
   const handleChange22 = () => {

   }



   return (
      <div>
         {tt.a} {tt.b} {tt.c}
         <input type="text" onChange={handleChange22} />
         <br />
         <br />
         <br />

         <input type="text" onChange={handleChange} value={text} />
         zz : {text}
         obj : {obj.a}

         <button type='button' onClick={add}>{b}++</button>

      </div>
   )
}

export default Page