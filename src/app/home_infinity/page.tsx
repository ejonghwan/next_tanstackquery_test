"use client"

import { useTodoInfiniry } from '@/store/queryies/todoQueries';
import Link from 'next/link';
import React from 'react'

const Page = () => {

   const {
      data,
      fetchNextPage,
      hasNextPage,
      isFetchingNextPage,
      isError,
      isLoading,
      isSuccess
   } = useTodoInfiniry();

   console.log('data?', data)

   return (
      <div>
         <Link href={'/'} style={{ padding: "10px", border: "1px solid #ddd", marginRight: '10px' }}>main</Link>
         <Link href={'/home'} style={{ padding: "10px", border: "1px solid #ddd", marginRight: '10px' }}>ssr page</Link>
         <Link href={'/home_csr'} style={{ padding: "10px", border: "1px solid #ddd", marginRight: '10px' }}>csr page</Link>
         <Link href={'/home_infinity'} style={{ padding: "10px", border: "1px solid #ddd", marginRight: '10px' }}>infinity page</Link>

      </div>
   )
}

export default Page