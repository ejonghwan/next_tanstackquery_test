"use client";

import React, { useEffect, useState } from "react";
import root from "react-shadow";

interface HtmlData {
  html: string;
  css: string;
  js?: string;
}

const ShadowPage = () => {
    
  const [content, setContent] = useState<HtmlData | null>(null);



  useEffect(() => {
    // DB 또는 API로부터 HTML, CSS, JS를 불러온다고 가정
    // 예: /api/html-content
    const fetchData = async () => {
       
    //   const res = await fetch("/api/html-content");
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/test`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            // "Authorization": `Bearer ${token}`,
        },
        cache: "no-store", })
      const data = await res.json();
      setContent(data.data);
    };

    fetchData();
  }, []);



  useEffect(() => {

    console.log('use eff?', content)

    if (content?.js) {
      // Shadow DOM 내부가 아니라 document 전체에 영향을 줄 수도 있으므로 주의
      const script = document.createElement("script");
      script.textContent = content.js;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [content]);



  if (!content) return <p>로딩 중...</p>;



  return (
    <root.div>
      <style>{content.css}</style>
      <div dangerouslySetInnerHTML={{ __html: content.html }} />
    </root.div>
  );
};

export default ShadowPage;