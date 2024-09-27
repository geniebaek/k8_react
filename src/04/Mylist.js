import MyListData from './MyListData.json';
import Mylistitem from './Mylistitem';
export default function Mylist() {
  
  console.log(MyListData)
  const tags=MyListData.map(item=><Mylistitem
                                   key={item.title}
                                   title={item.title}
                                   content={item.content}
                                   imgUrl={item.imgUrl}/> );
  return (
    <div className='w-10/12  grid grid-cols-1 lg:grid-cols-2 gap-4'>  
      {tags}
    </div>
  )
}
