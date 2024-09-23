function Hello(){ //꼭 return 있어야함
  let today = new Date();
  today=today.toLocaleTimeString(); 

  let name='PNU'
// jsx는 반드시 하나의 태그만 return
// 하지만 여러가지 태그들을 하나의 태그로 감싸면 가능 
// >부모태그 하나만 있어야함 자식이 몇이든 상관없음  
// 태그를 묶이만 할거면 fragment:<>/</>태그를 쓰면됨  *div로 감쌀 필요 없음

//class속성은 반드시 className(react:카멜표기법)사용
  return( 
    <>
    <p className='p1'> 
      Hello, React!!
      
    </p>
    <p className="text-4xl text-cyan-100">
      백진
    </p>
    {/* <p style={{backgroundColor:'gray', color:'white'}}> */}
    <p className="text-4xl text-cyan-200">
      {name==='PNU'?'부산대학교 K8-REACT':'K8-REACT'}
    </p>
    <p className="text-4xl text-cyan-300">
       {/* {new Date.toloLocaleString()}  */}
       {today}
    </p>
    </>
  );
}


export default Hello; // default export

