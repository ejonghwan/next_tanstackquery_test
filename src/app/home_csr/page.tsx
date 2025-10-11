"use client"

import React from 'react'
import TodoWrap from '@/components/todo/todoWrap'
import { useTodoAllList } from '@/store/queryies/todoQueries'

import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";



const Home = () => {



   const { data: todoData, isError: todoError, isSuccess: todoSuccess, isLoading: todoLoading } = useTodoAllList()



   return (
      <div>
         <h1>Home</h1>
         {/* <TodoWrap data={todoData?.data} /> */}
         <TodoWrap data={todoData?.data ?? []} />

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