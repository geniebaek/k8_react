import MyListData from './MyListData.json';
import Mylistitem from './Mylistitem';
export default function Mylist() {
  console.log(MyListData)
  MyListData.map(item=>console.log(item.title)  );
  return (
    <div className='w-10/12 grid grid-cols-2 gap-4'>  
      <Mylistitem/>
      <Mylistitem/>
      <Mylistitem/>
      <Mylistitem/>
    </div>
  )
}
