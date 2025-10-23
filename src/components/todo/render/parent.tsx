"use client"

import React, { useCallback, useState, useEffect, useMemo } from 'react'

const Parent = () => {

   // let aaa = 0
   // 초기화됨
   // const aaaup = () => {
   //    aaa += 1
   //    console.log('aaa?', aaa)
   // }


   const aaaup = useCallback(() => {
      let aaa = 0
      aaa += 1
      console.log('aaa?', aaa)
      return aaa
   }, [])

   const [test, setTest] = useState({
      name: 'initaial',
      age: 0
   })

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setTest(prev => (
         {
            ...prev,
            [name]: value
         }
      ))
   }

   // aaaup()
   // console.log(aaa)



   // useCallback
    const [number, setNumber] = useState(0);
  
   // const someFunction = () => {
   //    console.log(`someFunc: number: ${number}`);
   //    return;
   // };

   // useCallback에 담아두지 않으면 다른 렌더링 일어날떄 계속 실행됨 
    const someFunction = useCallback(() => {
      console.log(`someFunc: number: ${number}`);
      return;
   }, [number]);

    useEffect(() => {
      console.log('someFunction이 변경되었습니다.');  
   }, [someFunction])
   




   // useMemo
   const [isGym, setIsGym] = useState(true);
     
   //   const gym = isGym ? '다님' : '안다님';
   // const gym = {
   //    workout: isGym ? '다님' : '안다님'
   // };
    const gym = useMemo(() => {
      return {
      workout: isGym ? '다님' : '안다님',
      }
   }, [isGym]);
   
   useEffect(() => {
      console.log('gym useEffect 호출');
   }, [gym]);

   return (
      <div>

         <input type="text" name="name" value={test.name} onChange={handleChange} />
         <input type="text" name="age" value={test.age} onChange={handleChange} />
         <button type='button' onClick={aaaup}>upup</button>

         <div>
            {test.name} / {test.age}
         </div>


         <br />
         <br />
         <br />
         <br />
         <br />
         <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
         />
         <br />
         <button onClick={someFunction}>Call someFunc</button>

         <br />
         <br />
         <br />
         <br />
         <br />
          <h2>피트니스 클럽 다니심?</h2>
         <p>gym: {gym.workout}</p>
         <button onClick={() => setIsGym(!isGym)}>Gym</button>


         <br />
         <br />
         <br />
         <br />
         <br />
         

      </div>
   )
}

export default Parent






// function Profile({userId}) {
//   const [user, setUeser] = useState();
//   async function fetchAndSetUser(needDetail){
//     const data = await fetchUser(userId, needDetail);
//     setUser(data)
//   }
// }

// useEffect(() => {
//   fetchAndSetUser(false);
// },[fetchAndSetUser]);




// function Profile({userId}){
//   const [user, setUser] = useState();
//   const fetchAndSetUser = useCallback(
//     async needDetail => {
//       const data = await fetchUser(userId, needDetail);
//       setUser(data);
//     },
//     [userId]
//   );
  
//   useEffect(() => {
//     fetchAndSetUser(needDetail);
//   },[fetchAndSetUser, needDetail])
  
// }