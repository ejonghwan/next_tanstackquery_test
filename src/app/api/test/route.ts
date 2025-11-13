// import { useSearchParams } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

// 1. api request => 
// 2. express db 조회 후 res 해줌. => 
// 3. client await fn에 return 값으로 담김

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    // const searchParams = useSearchParams();
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('query')

    console.log('back api?')

    const res = {
        message: 'test list',
        data: {
            // id: params.id,
            title: 'test title',
            // content: '<div> <p>이건 피태그임</p> <strong class="tit">im tit</strong> <div>컴포넌트 호출되는지? : <Test2 /></div></div>',
            html: "<ul class='evtTest'> <li class='a'>1</li> <li class='a'>2</li> <li class='a'>3</li> <li class='a b'>4</li> <li class='a'>5</li> <li class='a'>6<span>span1</span><span>span2</span></li><li class='a'>7</li><li class='a'>8</li><li class='a'>9</li><li class='a'>10</li></ul>",
            js: "const a = document.querySelector('.evtTest');addEventListener('click', e => {let hoho = evtAssign('.a', e.target) ;console.log(hoho);});function evtAssign(selector, evtTarget) {let isTarget = target => [...target.querySelectorAll(selector)].includes(target) || target.closest(selector);return isTarget ? isTarget(evtTarget): false; }",
            css: '.evtTest > li { border: 1px solid black; padding: 5px; }',
            component: "Test2",
            isDone: false,
            query: query
        },
        status: 200,
    }


    return NextResponse.json(res, { status: 200 })
}

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {

    // const searchParams = request.nextUrl.searchParams;
    // const query = searchParams.get('query')
    const data = await request.json();


    // return Response.json({ title: data.title, param: params })
}