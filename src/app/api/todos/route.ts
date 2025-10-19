import { NextRequest, NextResponse } from "next/server"
// import { getAllTodo, addTodo } from "@/src/data/firestore";
import { promises as fs } from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data.json");

/*
@ path    GET /api/todos
@ doc     모든 할일 목록 가져오기
@ access  public
*/
export const GET = async (req: NextRequest) => {

   //  const fetchedTodos = await getAllTodo();
   const data = await fs.readFile(filePath, "utf8").catch(() => "[]");
   const todos = JSON.parse(data);
   // fetchedTodos = [
   //    { id: 0, title: 'a1', content: 'aa1' },
   //    { id: 1, title: 'a2', content: 'aa2' },
   //    { id: 2, title: 'a3', content: 'aa3' },
   //    { id: 3, title: 'a4', content: 'aa4' },
   // ]

   const res = {
      state: 'SUCCES',
      message: '성공',
      data: todos,
   }
   return NextResponse.json(res, { status: 201 })
}



// /*
// @ path    POST /api/todos
// @ doc     할일 추가하기
// @ access  public
// */
export const POST = async (req: NextRequest) => {
   // 프론트에서 오는게 req
   // const { id, title, content } = await req.json();
   // if (!title || !content) return NextResponse.json({ state: 'FAILUE', message: 'title을 넣어주세요', }, { status: 422 });


   // //  const addedTodo = await addTodo({ title })
   // fetchedTodos = [...fetchedTodos, { id, title, content }]

   // console.log('???', fetchedTodos)


   const { id, title, content } = await req.json();
   const data = await fs.readFile(filePath, "utf8").catch(() => "[]");
   const todos = JSON.parse(data);
   const newTodos = [...todos, { id, title, content }];
   await fs.writeFile(filePath, JSON.stringify(newTodos));

   const res = {
      state: 'SUCCES',
      message: '추가',
      data: newTodos,
   }

   return NextResponse.json(res, { status: 201 })
}