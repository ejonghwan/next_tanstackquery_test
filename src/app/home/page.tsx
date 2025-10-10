

import React from 'react'
import TodoWrap from '@/components/todo/todoWrap'
import { useTodoAllList } from '@/store/queryies/todoQueries'

import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";


type Todo = {
   id: number;
   title: string;
   content: string;
};

type TodosResponse = {
   data: Todo[];
};


const Home = async () => {

   const queryClient = new QueryClient();

   // 서버에서 미리 가져온 데이터 
   await queryClient.prefetchQuery<TodosResponse>({
      queryKey: ["todos"],
      queryFn: () =>
         fetch("http://localhost:3000/api/todos").then((r) => r.json()),
   });

   // 이렇게 캐시에서 꺼내와야함 -> 아니면 클라컴포에서 useQuery 캐시로 가져와도 됨. 클라컴포에서 캐시로 가져오는게 나은듯 
   const todoData = queryClient.getQueryData<TodosResponse>(["todos"]);
   console.log('todoData?', todoData)

   // const { data: todoData, isError: todoError, isSuccess: todoSuccess, isLoading: todoLoading } = useTodoAllList()






   return (
      <div>
         <h1>Home</h1>
         <HydrationBoundary state={dehydrate(queryClient)}>
            {/* <TodoWrap data={todoData?.data} /> */}
            <TodoWrap data={todoData?.data ?? []} />

            {/* 아래 타입에러는 useQuery의 queryFn의 타입지정이 없기 떄문에 타입추론을 {} 이렇게 한다고.. 떄문에 제네릭으로 넣어주는게 베스트 */}
            {/* Property 'data' does not exist on type '{}' */}
         </HydrationBoundary>

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