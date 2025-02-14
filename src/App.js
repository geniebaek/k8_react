import './App.css';
import { IoHome } from "react-icons/io5";

// import Hello from './01/Hello'; //import Hello.js
 import MyClock from './02/MyClock'; //import MyClock.js
// import Mydiv1 from './03/Mydiv1';
// import Mylist from './04/Mylist';
 import Lotto from './05/Lotto';
 import FoodMain from './06/FoodMain';
 import BoxOffice from './07/BoxOffice';
// import MyBox from './08/MyBox';
 import Traffic from './09/Traffic';
// import MyRef from './10/MyRef';
 import Gallery from './11/Gallery';
 import Festival from './12/Festival';
// import RouteMain from './13/RouteMain';
import Fcst from './14/Fcst';
import FcstList from './14/FcstList';
import RecoilMain from './15/RecoilMain';
import Rest from './16/Rest';

import { BrowserRouter,Routes,Route, Link } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <div className="w-full xl:w-10/20 h-screen mx-auto 
                    flex flex-col justify-center items-center">
      <header className='w-full h-20
                         flex justify-between items-center
                         bg-slate-200'>
        <p className='text-2xl font-bold p-5'>K-digital 8기</p>
        <ul className='flex  justify-center items-center text-xl font-bold'>
          <li className='mx-4 p-2 hover:bg-slate-600 hover:text-white rounded-2xl'><Link to='/'>시계</Link></li>
          <li className='mx-4 p-2 hover:bg-slate-600 hover:text-white rounded-2xl'><Link to='/lotto'>로또생성기</Link></li>
          <li className='mx-4 p-2 hover:bg-slate-600 hover:text-white rounded-2xl'><Link to='/food'>푸드뱅크</Link></li>
          <li className='mx-4 p-2 hover:bg-slate-600 hover:text-white rounded-2xl'><Link to='/box'>박스오피스</Link></li>
          <li className='mx-4 p-2 hover:bg-slate-600 hover:text-white rounded-2xl'><Link to='/traffic'>교통사고</Link></li>
          <li className='mx-4 p-2 hover:bg-slate-600 hover:text-white rounded-2xl'><Link to='/gallery'>관광</Link></li>
          <li className='mx-4 p-2 hover:bg-slate-600 hover:text-white rounded-2xl'><Link to='/festival'>축제</Link></li>
          <li className='mx-4 p-2 hover:bg-slate-600 hover:text-white rounded-2xl'><Link to='/fcst'>일기예보</Link></li>
          <li className='mx-4 p-2 hover:bg-slate-600 hover:text-white rounded-2xl'><Link to='/rest'>Restfull</Link></li>
        </ul>
        <p className='text-4xl font-bold p-5 '><Link to='/'><IoHome /></Link></p>

      </header>
      <main className='w-full grow
                       flex flex-col items-center
                       overflow-y-auto'>
        <Routes>
        {/* <Route path='/' element={<Mydiv1/> }/> */}
        {/* <Route path='/' element={<Mylist/> }/> */}
        <Route path='/' element={<MyClock/> }/>
        <Route path='/lotto' element={<Lotto/> }/>
        <Route path='/food' element={<FoodMain/> }/>
        <Route path='/box' element={<BoxOffice/>}/>
        {/* <Route path='/' element={<MyBox/>}/> */}
        <Route path='/traffic' element={ <Traffic/>}/>
        {/* <Route path='/' element={<MyRef/> }/> */}
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/festival' element={ <Festival />}/>
        {/* <Route path='/' element={<RouteMain/> }/> */}
        <Route path='/fcst' element={<Fcst/>}/>
        <Route path='/fcstlist' element={<FcstList/>}/>
        <Route path='/rmain' element={<RecoilMain/>}/>
        <Route path='/rest' element={<Rest/>}/>
        </Routes>
      </main>
      <footer className='w-full h-20 flex-shrink-0
                         flex justify-center items-center
                         text-white bg-black'>
        <p>2024 K-digital 8기 지니</p>
      </footer>

    </div>
    </BrowserRouter>
  );
}

export default App;
