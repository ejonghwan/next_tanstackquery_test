"use client"

import React from 'react'
import TodoWrap_CSR from '@/components/todo/todoWrap_csr'

import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import Link from 'next/link';



const Home = () => {



   // const { data: todoData, isError: todoError, isSuccess: todoSuccess, isLoading: todoLoading } = useTodoAllList()



   return (
      <div>
         <h1>Home</h1>
         <div>
            <Link href={'/'} style={{ padding: "10px", border: "1px solid #ddd", marginRight: '10px' }}>main</Link>
            <Link href={'/home'} style={{ padding: "10px", border: "1px solid #ddd", marginRight: '10px' }}>ssr page</Link>
            <Link href={'/home_csr'} style={{ padding: "10px", border: "1px solid #ddd", marginRight: '10px' }}>csr page</Link>
         </div>
         {/* <TodoWrap data={todoData?.data} /> */}
         <TodoWrap_CSR />

      </div>
   )
}

export default Home



// 위 방법말고 다른 방법은 서버컴포넌트 내에서 fetch로 데이터 가져온 후 클라이언트 컴포넌트로 넘겨주면서 캐시만 해두는 방법도 있음


// // page.tsx (Server Component)
// import ClientList from "./ClientList";

// export default async function Page() {
//   const res = await fetch("https://api.example.com/users", { cache: "no-store" });
//   const data = await res.json();

//   return <ClientList initialData={data} />;
// }

// // ClientList.tsx (Client Component)
// "use client";
// import { useQuery } from "@tanstack/react-query";

// export default function ClientList({ initialData }) {
//   const { data } = useQuery({
//     queryKey: ["users"],
//     queryFn: () => fetch("/api/users").then(r => r.json()),
//     initialData,
//   });

//   return <pre>{JSON.stringify(data, null, 2)}</pre>;
// }