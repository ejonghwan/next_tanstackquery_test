import { NextRequest, NextResponse } from "next/server"
// import { getAllTodo, addTodo } from "@/src/data/firestore";

/*
@ path    GET /api/todos
@ doc     모든 할일 목록 가져오기
@ access  public
*/
export const GET = async (req: NextRequest) => {

   //  const fetchedTodos = await getAllTodo();

   const fetchedTodos = [
      { id: 0, title: 'a1', content: 'aa1' },
      { id: 1, title: 'a2', content: 'aa2' },
      { id: 2, title: 'a3', content: 'aa3' },
      { id: 3, title: 'a4', content: 'aa4' },
   ]

   const res = {
      state: 'SUCCES',
      message: '성공',
      data: fetchedTodos,
   }
   return NextResponse.json(res, { status: 201 })
}



// /*
// @ path    POST /api/todos
// @ doc     할일 추가하기
// @ access  public
// */
// export const POST = async (req: NextRequest) => {
//     // 프론트에서 오는게 req
//     const { title } = await req.json();
//     if (!title) return NextResponse.json({ state: 'FAILUE', message: 'title을 넣어주세요', }, { status: 422 });


//     const addedTodo = await addTodo({ title })
//     const res = {
//         state: 'SUCCES',
//         message: '추가',
//         data: addedTodo,
//     }

//     return NextResponse.json(res, { status: 201 })
// }