
import { useEffect,useState } from "react"
import TailButton from "../UI/TailButton"
export default function BoxOffice() {
  const [cnt, setCnt]=useState();

  const handleUp=()=>{
    setCnt(cnt+1);
  }

  const handleDown=()=>{
    setCnt(cnt-1);
  }


  //맨처음 한번 실행
  useEffect(()=>{
    console.log("useEffect []");
    setCnt(100);
  },[]); //useEffect()안에 콜백함수와 [] 써야함 usedEffect(()=>{},[])

  //state 변수 cnt가 변경될때

  useEffect(()=>{
    console.log("useEffect [cnt]",cnt);
    
  },[cnt]); //cnt변경시 useEffect()실행

  //변경이 일어날 때 마다 실행 (업데이트)
  useEffect(()=>{
    console.log("useEffect [cnt]");
    
  });

 

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="flex justify-center items-center m-5
                       text-3xl
                       ">
        {cnt}
      </div>
      <div>
      <TailButton caption= '증가'
                  color = "zinc"
                  handleClick={handleUp}/>
      <TailButton caption= '감소'
                  color = "gray"
                  handleClic={handleDown}/>
      </div>
    </div>
  )
}

