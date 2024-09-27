import TailButton from "../UI/TailButton"
import TailBall from "./TailBall"
import { useState } from "react";
export default function Lotto() {
  //state변수는 useState Hook으로 만듬 const는 상수라 바뀔 수 없지만 set으로 씌워서 변경 가능 setTags는 tags에 변경되는 값을 넣어줌
  const [tags, setTags]= useState();
  const handleClick = () => {
    let arr=[];

    while(arr.length<7){
      let n = Math.floor(Math.random() * 45) + 1 ;
      if(!arr.includes(n))
        arr.push(n);//push 배열 끝에 새로운 요소 추가
      
      
      
    }
    //보너스 번호
    const bonus=arr.splice(-1); //배열 자르기
    //번호 정렬
    arr.sort((a,b)=>a-b) // 공식임 오름차순 a-b 내림차순 b-a
    //보너스 번호 추가
    arr=arr.concat(bonus); //배열과 배열 붙이기

    //볼 만들기

    let tm = arr.map((item)=><TailBall key={"b"+item} n={item}/>)

    //plust기호 넣기
    tm.splice(6,0,<div className="text-3xl mx-2 font-bold" key="sp">+</div>)
    
    console.log(tm)
    // let n = Math.floor(Math.random() * 45) + 1 ;//1~45 랜덤수 생성
    setTags(tm); //
  }
  
  // const num=arr.map(()=>Math.floor(Math.random() * 45) + 1)
  
  return (
    <div className="w-full">
      <div className="flex justify-center items-center mb-10">
        {/* <TailBall key={"b"+n} n={n}/> */}
        {tags}
      </div>
      <div className="flex justify-center items-center mb-10">
        <TailButton cation={'로또번호생성'} color='zinc'
                          handleClick={handleClick}/>
        {/* <TailButton cation={'로또번호생성지우기'} color={'gray'}
                          handleClick={handleClick2}/> */}
        {/* <TailButton cation={'로또번호2'} color={'slate'}
                          handleClick={handleClick}/> */}
      </div>
    </div>
  )
}
