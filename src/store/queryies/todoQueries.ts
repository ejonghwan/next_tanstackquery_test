


import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { todoKeys } from '@/store/queryies/todoKeys'
import { ontodoAPI, onCreateTodoAPI, ontodoAPI_ssr } from '@/store/queryies/todoQueryFn'




export const useTodoAllList = () => {

   return useQuery({
      queryKey: todoKeys.all,
      queryFn: () => ontodoAPI(),
      // staleTime: 60 * 1000 * 10, //10분
      // gcTime: 60 * 1000 * 11,
      staleTime: 60 * 100,
      gcTime: 60 * 200,
   })

}




// ssr
export const useTodoAllList_ssr = () => {
   return useQuery({
      queryKey: ['todo_ssr'],
      queryFn: () => ontodoAPI_ssr(),
      // staleTime: 60 * 1000 * 10, //10분
      // gcTime: 60 * 1000 * 11,
      staleTime: 60 * 300,
      gcTime: 60 * 500,
      //   staleTime: 0,           // 즉시 stale 상태 (항상 refetch 준비)
      //   refetchOnMount: true,       // 컴포넌트가 다시 마운트될 때 refetch
      //   refetchOnWindowFocus: true, // 창에 포커스 돌아올 때 refetch
      //   refetchOnReconnect: true,   // 네트워크 다시 연결될 때 refetch

      // 데이터를 가져온 후 1분 동안은 fresh 상태

      // 1분이 지나면 stale 상태

      // 하지만 그 시점에 아무 이벤트가 없으면 refetch는 일어나지 않음

      // 만약 그 후에
      // 🔹 새로고침하거나
      // 🔹 페이지 이동 후 다시 돌아오거나
      // 🔹 탭 포커스가 다시 돌아오면
   })
}



export const useCreateTodo = () => {

   const queryClient = useQueryClient();
   return useMutation({
      mutationFn: (payload: { id: number; content: string; title: string }) => {
         console.log('query fn ? ', payload)
         return onCreateTodoAPI(payload)
      },
      onSuccess: (data, variables) => {
         console.log('??????????????', data, variables)
         queryClient.setQueryData(['todo_ssr'], (oldData: { id: number; title: string; content: string }[]) => {
            console.log('oldData?', oldData)
            return [...oldData, variables]
         })
         // queryClient.invalidateQueries({ queryKey: ['todo_ssr'] });

         // queryClient.setQueryData(restaurantKeys.listAll(category), (oldData: any) => {
         //             console.log('oldData??', oldData, 'data?', data, '변수?', variables, 'category??', category)
         //             console.log('캐시 ?', queryClient.getQueryCache().findAll());
         //             if (!oldData) return;

         //             // console.log('oldData??', oldData)
         //             // console.log('data??', data)
         //             // console.log('variables??', variables)

         //             console.log('상세페이지에서 업데이트 ? ', oldData,)

         //             // 리스트페이지일경우
         //             if (type === "list") {
         //                return {
         //                   ...oldData,
         //                   pages: oldData.pages.map((page) => ({
         //                      ...page,
         //                      data: page.data.map((restaurant) =>
         //                         restaurant.id === variables.restaurantId
         //                            ? { ...restaurant, like: data.data.like, hasMyLike: data.data.hasMyLike }
         //                            : restaurant
         //                      ),
         //                   })),
         //                };
         //             }

      },
      //   // mutation이 실패한 경우
      // onError: (err, newData, context) => {
      //    // onMutate로부터 반환된 context를 사용하여 rollback
      //    queryClient.setQueryData(['queryKey'], context.previousData)
      // },
      // onSettled: () => {
      //    // 성공, 실패 여부에 관계 없이 refetch
      //    queryClient.invalidateQueries({ queryKey: ['queryKey'] })
      // }
   })
}






// import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
// import { restaurantKeys } from '@/src/store/queryies/restaurant/restaurantKeys'
// import { onLoadRestaurantListAPI, onLoadRestaurantDetailAPI, onCreateRestaurantAPI, onEditRestaurantAPI, onDeleteRestaurantAPI, onLikeRestaurantAPI } from '@/src/store/queryies/restaurant/restaurantQueryFn'
// import { RestaurantData, RestaurantLikeData } from '@/src/types/data/restaurant'
// import { useInfiniteQuery } from '@tanstack/react-query'
// import { useSearchParams } from 'next/navigation'

// /*
// 1. 글 리스트 로드할 때 캐싱된 쿼리키
// 2. 해당 리스트를 변경하려면 쿼리키를 동일학 ㅔ맞춰서 업데이트 해줘야됨
// 예를 들어 로드할떈 ['restaurant', 'listInfinite', categoryName], 이렇게 적었으면 업데이트할떄도 동일하게 적어줘야됨
// */


// // 모든 글 로드
// export const useRestaurantListInfinite = (limit: number, categoryName: string) => {

//    // console.log('cate??', categoryName)

//    return useInfiniteQuery({
//       // queryKey: ['restaurant', 'listInfinite', categoryName],
//       queryKey: restaurantKeys.listAll(categoryName),
//       queryFn: ({ pageParam }) => {
//          const { cursor, cursorId } = pageParam || {};
//          // pageParam은 요청 보낼 때의 값
//          // console.log('언제 실행되는지 ?', pageParam)

//          return onLoadRestaurantListAPI(limit, categoryName, cursor, cursorId);
//       },
//       getNextPageParam: (lastPage) => {
//          // 백엔드에서 넘겨준 다음 커서 정보
//          // console.log('백엔드에서 넘겨준 다음 커서정보', lastPage)
//          // if (!lastPage?.nextCursor || !lastPage?.nextCursorId) return undefined;
//          // if (lastPage?.data?.length < limit) return undefined;
//          if (!lastPage.hasNext) return undefined;

//          return {
//             cursor: lastPage.nextCursor,
//             cursorId: lastPage.nextCursorId,
//          };
//       },
//       initialPageParam: {
//          cursor: null,
//          cursorId: null,
//       },
//       staleTime: 1000 * 60 * 10, //10분
//    });
// };



// // 상세 로드
// export const useRestaurant = (restauranId: string) => {

//    return useQuery({
//       queryKey: restaurantKeys.detail(restauranId),
//       queryFn: () => onLoadRestaurantDetailAPI(restauranId),
//       staleTime: 60 * 1000 * 10, //10분
//       gcTime: 60 * 1000 * 11,
//       // staleTime: 3600,
//       // gcTime: 4000,
//    })
// }



// // 글쓰기
// export const useCreateRestaurant = () => {

//    return useMutation({
//       mutationFn: (payload: RestaurantData) => {
//          console.log('query fn ? ', payload)
//          return onCreateRestaurantAPI(payload)
//       },
//    })
// }



// // 글 수정
// export const useEditRestaurant = () => {

//    const searchParams = useSearchParams()
//    const category = searchParams.get('search') || '전체'

//    const queryClient = useQueryClient();
//    return useMutation({
//       mutationFn: (payload: RestaurantData) => {
//          return onEditRestaurantAPI(payload)
//       },
//       onSuccess: (data, variables) => {
//          queryClient.invalidateQueries({ queryKey: restaurantKeys.listAll(category) });
//          console.log('쿼리쪽 edit data?', data, variables)
//       },
//    })
// }


// // 글 좋아요
// export const useLikeRestaurant = (type: "list" | "detail" = "list") => {

//    const searchParams = useSearchParams()
//    const category = searchParams.get('search') || '전체'

//    const queryClient = useQueryClient();
//    return useMutation({
//       mutationFn: (payload: RestaurantLikeData) => {
//          return onLikeRestaurantAPI(payload)
//       },
//       onSuccess: (data, variables) => {
//          console.log('상세페이지에서 상태 ? ',)

//          // 이부분 수정해야됨

//          queryClient.setQueryData(restaurantKeys.listAll(category), (oldData: any) => {
//             console.log('oldData??', oldData, 'data?', data, '변수?', variables, 'category??', category)
//             console.log('캐시 ?', queryClient.getQueryCache().findAll());
//             if (!oldData) return;

//             // console.log('oldData??', oldData)
//             // console.log('data??', data)
//             // console.log('variables??', variables)

//             console.log('상세페이지에서 업데이트 ? ', oldData,)

//             // 리스트페이지일경우
//             if (type === "list") {
//                return {
//                   ...oldData,
//                   pages: oldData.pages.map((page) => ({
//                      ...page,
//                      data: page.data.map((restaurant) =>
//                         restaurant.id === variables.restaurantId
//                            ? { ...restaurant, like: data.data.like, hasMyLike: data.data.hasMyLike }
//                            : restaurant
//                      ),
//                   })),
//                };
//             }

//             // 상세페이지일경우
//             if (type === "detail") {
//                return {
//                   ...oldData,
//                   pages: oldData.pages.map((page) => ({
//                      ...page,
//                      data: page.data.map((restaurant) =>
//                         restaurant.id === variables.restaurantId
//                            ? { ...restaurant, like: data.data.like, hasMyLike: data.data.hasMyLike }
//                            : restaurant
//                      ),
//                   })),
//                };
//             }

//          });



//          // // 글에 좋아요 업데이트
//          // queryClient.setQueryData(restaurantKeys.listAll(category), (oldData: any) => {

//          //    console.log('oldData??', oldData, 'data?', data, '변수?', variables)

//          //    return {
//          //       ...oldData,
//          //       data: oldData.data.map((restaurant) =>
//          //          restaurant.id === variables.restaurantId ? { ...restaurant, like: data.data.like, hasMyLike: data.data.hasMyLike } : restaurant
//          //       ),
//          //    };
//          // });
//       },
//    })
// }





// // 글 삭제
// export const useDeleteRestaurant = () => {

//    const searchParams = useSearchParams()
//    const category = searchParams.get('search') || '전체'

//    const queryClient = useQueryClient();
//    return useMutation({
//       mutationFn: (payload: { restaurantId: string, token: string }) => {
//          return onDeleteRestaurantAPI(payload)
//       },
//       onSuccess: (data, variables) => {
//          queryClient.invalidateQueries({ queryKey: restaurantKeys.listAll(category) });
//          console.log('쿼리쪽 delete data?', data, variables)
//       },
//    })
// }











// const queryClient = useQueryClient(() => axios.post(`api/like/${id}`), {
//    onMutate: async (id) => {
//       // 'queryKey'로 진행 중인 refetch 취소하여 낙관적 업데이트를 덮어쓰지 않도록 함
//       await queryClient.cancleQueries({
//          queryKey: ['queryKey]
//         })

//       // 이전 데이터를 받아옴
//       const previousData = queryClient.getQueryData(['queryKey']);

//       // 새로운 값으로 낙관적 업데이트
//       queryClient.setQueryData(['queryKey'], (prev) => !prev)

//       return { previousData }
//    },
//    // mutation이 실패한 경우
//    onError: (err, newData, context) => {
//       // onMutate로부터 반환된 context를 사용하여 rollback
//       queryClient.setQueryData(['queryKey'], context.previousData)
//    },
//    onSettled: () => {
//       // 성공, 실패 여부에 관계 없이 refetch
//       queryClient.invalidateQueries({ queryKey: ['queryKey'] })
//    }
// });

// const deleteData = useMutation({

// })