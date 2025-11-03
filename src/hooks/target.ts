"use client"

import React, { useEffect, useRef, useState } from 'react'


interface Props {
   el: any;
}

const useTarget = ({ el }: Props) => {


   const tRef = useRef(el)

   // tRef.current
   useEffect(() => {
      console.log(tRef.current)
   }, [])



   return tRef
}

export default useTarget