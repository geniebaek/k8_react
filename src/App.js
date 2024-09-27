import './App.css';
import { IoHome } from "react-icons/io5";
// import Hello from './01/Hello'; //import Hello.js
//import MyClock from './02/MyClock'; //import MyClock.js
// import Mydiv1 from './03/Mydiv1';
// import Mylist from './04/Mylist';
// import Lotto from './05/Lotto';
import FoodMain from './06/FoodMain';
function App() {
  return (
    <div className="w-full xl:w-10/20 h-screen mx-auto 
                    flex flex-col justify-center items-center">
      <header className='w-full h-20
                         flex justify-between items-center
                         bg-slate-200'>
       <p className='text-2xl font-bold p-5'>K-digital 8기</p>
       <p className='text-4xl font-bold p-5 '><IoHome/></p>
       
      </header>
      <main className='w-full grow
                       flex flex-col items-center
                       overflow-y-auto'>
       {/* <Mydiv1/> */}
       {/* <Mylist/> */}
       {/* <Lotto/> */}
       <FoodMain/>
      </main>
      <footer className='w-full h-20
                         flex justify-center items-center
                         text-white bg-black'>
      <p>2024 K-digital 8기 지니</p>
      </footer>
      
    </div>
  );
}

export default App;
