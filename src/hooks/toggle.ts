"use client"

import React, { useCallback, useEffect, useRef, useState } from 'react'



const useToggle = (initial: boolean): [boolean, () => void] => {

   const [to, setTo] = useState(initial)
   const handleToggle = useCallback(() => setTo(prev => !prev), [])


   return [to, handleToggle]
}

export default useToggle