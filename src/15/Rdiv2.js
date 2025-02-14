import { AtomN,AtomN2 } from "./Atoms";
import { useRecoilValue } from "recoil";
import Rdiv3 from "./Rdiv3";
export default function Rdiv2() {
  const x = useRecoilValue(AtomN);
  const y = useRecoilValue(AtomN2)
  return (
    
    <div className="w-full h-4/6
    flex flex-col justify-center items-center
    bg-lime-700 text-white font-bold">
      <div className='w-full  p-5 m-2
                      flex justify-start items-center'>
        
        Rdiv2 x={x} y={y}
      </div> 
   
    
    </div>
  )
}
