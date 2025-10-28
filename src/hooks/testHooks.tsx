"use client"

import React, { useEffect, useState } from 'react'

const TestHooks = (): [number, () => void] => {


   const [aa, testAA] = useState(0)

   const handleClick = () => {
      testAA(prev => prev + 1)
   }

   useEffect(() => {
      console.log(aa)
   }, [aa])

   return [aa, handleClick]
}

export default TestHooks