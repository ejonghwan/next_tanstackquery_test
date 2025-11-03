"use client"

import useTarget from '@/hooks/target'
import useToggle from '@/hooks/toggle'
import React from 'react'

const Page = () => {


   const [state, handler] = useToggle(false)


   return (
      <div>Page

         <button type='button' onClick={handler}>toggle {state ? 'true' : 'false'}</button>
      </div>
   )
}

export default Page
