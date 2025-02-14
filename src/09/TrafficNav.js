import TailButton from '../UI/TailButton'



export default function TrafficNav({title, c, sel, setSel, info}) {
  // const [sel, setSel]=useState();

  // const c=['차대사람', '차대차', '차량단독', '철길건널목'];

  const handleBtClick = (item) => {

    setSel(item);
    
  }
  const tags=c.map(item => <TailButton 
                            key={item} 
                            caption={item}
                            color={item == sel ?'gray':'zinc'}
                            handleClick={()=>handleBtClick(item)} />
  )
 

  // const a=['횡단중', '차도통행중', '길가장자리구역통행중', '보도통행중', '기타']
  return (
    <div className='w-10/12 p-2 m-2 bg-zinc-100
                    flex justify-between items-center'>
        <div className='w-1/5
                        flex justify-center items-center'>
          교통사고 {title}
          </div>
        <div className='flex justify-end items-center '>
          
          {tags}
        </div>

        
    </div>
  )
}
