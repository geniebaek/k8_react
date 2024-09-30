import {useState, useEffect} from "react"

function MyClockTime(){
 const [cTime,setCtime]=useState(new Date())

 useEffect(()=>{
   const tm=setInterval(()=>{ //setInterval은 한번 실행되면 계속 돔
    setCtime(new Date())
  },1000)
  return ()=>{clearInterval(tm)} //컴퍼넌트가 없어질때 사라짐

 },[])
  return(
    
    <div className='w-full flex justify-center items-center
                      text-2xl font-bold'>
      현재시각 : {cTime.toLocaleTimeString()}
    </div>
    
  );


}

export default MyClockTime;