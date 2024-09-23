function MyClockTime(){

  return(
    
    <div className='tm'>
      현재시각 : {new Date().toLocaleTimeString()}
    </div>
    
  );


}

export default MyClockTime;