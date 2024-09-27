import bank from './img/bank.png';
import busan from './img/busan.png';
import market from './img/market.png';
import {useState} from'react';


export default function FoodCard({obj}) {
  const[isShow,setIsShow] = useState(false);


 
  const objimg={
    '광역지원센터': busan,
    '기초푸드뱅크': bank,
    '기초푸드마켓': market
  }

  const handleClick = () => {
    setIsShow(!isShow);
  }

  return (
    <div className='w-10/12  
                     border border-gray-300
                     flex  rounded-md p-5'>
      
      <div className=' flex justify-start items-start mr-5'>
        {/* <img src={obj["구분"]==='광역지원센터' ? busan : obj["구분"]==="기초푸드뱅크"? bank: market} alt={obj["구분"]} width="200" height="200" /> */}
        <img src={objimg[obj["구분"]]} alt={obj["구분"]} width="200" height="200" />
         {/* <img src={busan} alt="광역지원센터" width="200" height="200" /> */}
        {/* <img src={market} alt="기초푸드마켓" width="200" height="200" />  */}
        {/* {obj["구분"]} */}
        
      </div>
      <div className='w-4/5 flex flex-col justify-between items-start '>
      <div>
        <div className='text-3xl  text-slate-700 font-bold'>
          
          {obj["사업장명"]}
        </div>
        <div className='text-xl  text-slate-500 font-bold'>
          {obj["운영주체명"]}
        </div>
        <div>
          {obj["사업장 소재지"]} 
          {/* 중간에 공백이 있는 obj는 . 연산자로 호출 불가 반드시 대괄호로 접근해야함 */}
        </div>
        </div>
        
        <div className='w-full h-8 p-2
                        flex justify-end items-center

                        bg-slate-600 text-white font-bold' 
                        onClick={handleClick} >
          {/* {isShow ? obj["연락처(대표번호)"]:""} 삼항 연산자, &&도 가능 */} 
          {isShow && obj["연락처(대표번호)"]}
        </div>
      </div>
    </div>
    
  )
}
