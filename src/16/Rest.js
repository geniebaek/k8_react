import TailButton from "../UI/TailButton" ;
import { useRef,useState,useEffect } from "react";
export default function Rest() {
  //화면 재렌더링을 위한 state 변수
  const[tdata, setTdata]=useState([]);
  const[trs, setTrs]=useState([]);
  const[isUpdate, setIsUpdate]=useState(false);// 입력, 수정을 확인
  const[UpdateId,setUpdateId]=useState(); //수정할 데이터 아이디
  
  //입력값을 제어하기 위한 ref 변수
  const txt1Ref =useRef();
  const txt2Ref =useRef();

  //restfull endpoint 주소
  const url='http://localhost:3005/posts';

  //데이터 가져오기 사용자 정의함수
  const getFetchdata=async()=>{
    const resp= await fetch(url); //fetch는 비동기함수이기 때문에 (답 오기 전에 다음 문장을 실행)  await을 붙여야됨 await(기다려주는 키워드/async 함수내에서 사용가능)
    console.log('resp=',resp);
    const data= await resp.json();
    console.log('data=', data);

    //전체 데이터  저장 state변수에 넣기
    setTdata(data);
  }

  //입력 처리 사용자 정의 함수
  const handlePost = async()=>{
    //입력 확인
    if(txt1Ref.current.value == '' ){
      alert('제목을 입력하세요.')
      txt1Ref.current.focus()  //제목을 입력하세요 띄우고 제목에 focus 맞춰주기 focus는 함수
      return;
    }
    if(txt2Ref.current.value == '' ){
      alert('작성자를 입력하세요.')
      txt2Ref.current.focus()  //제목을 입력하세요 띄우고 제목에 focus 맞춰주기 focus는 함수
      return;
    }
    //보낼 데이터 object로 만들기
    const postData={
      
      title : txt1Ref.current.value,
      author : txt2Ref.current.value
    }

    //post fetch
    const resp= await fetch(url, {
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(postData),
        
      });
      //입력된 데이터 반환
    const data=await resp.json();
    console.log(data);

    setTdata([data , ...tdata]) ;

    

  }

  //삭제하는 사용자 정의 함수
  const handleDelete=async(id)=>{
    console.log(id)
    const resp= await fetch(`${url}/${id}`, {  //url 조심해야함 ex)http://localhost:3005/posts/1
      method:'DELETE',
    });
    //삭제된 데이터 반환
    const data =await resp.json();
    console.log('delete data=',data);
    const tm=tdata.filter(item=>item.id !== id);
    setTdata(tm);
  }
  //수정 사용자 정의함수
  const handleUpdate = (item)=>{
    console.log('update',item)
    txt1Ref.current.value = item.title;
    txt2Ref.current.value = item.author;

    setIsUpdate(true);
    setUpdateId(item.id);
  }

  //수정 처리 사용자 정의함수
  const handlePut=async()=>{
    console.log('handleput')
    //입력확인
    if (!txt1Ref.current.value) {
      alert('제목을 입력하세요.') ;
      txt1Ref.current.focus();
      return ;
    }
    if (!txt2Ref.current.value) {
      alert('작성자를 입력하세요.') ;
      txt2Ref.current.focus();
      return ;
    }
    //보낼 데이터 object로 만들기
    const postData = { 
      title : txt1Ref.current.value,
      author : txt2Ref.current.value
    }
    //post fetch
    const resp = await fetch(`${url}/${UpdateId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    }) ;
   
    //수정 데이터 반환
    const data = await resp.json() ;
    console.log(data)

    const tm = tdata.map(item=>item.id ===UpdateId ? data : item);
    setTdata(tm);

    setIsUpdate(false);
    setUpdateId('');
    txt1Ref.current.value='';
    txt2Ref.current.value='';
  }
  //입력과 수정을 구분하는 사용자 정의함수
  const handleOk=()=>{
    if(!isUpdate) handlePost();
    else handlePut();
  }

  //컴포넌트 생성시 실행
  useEffect(()=>{
    //데이터 가져오기
    getFetchdata();
  },[]);

  //tdata가 변경이 되었을 때 실행
  useEffect(()=>{
    const tm= tdata.map(item=><tr key={item.id} className="bg-white border-b h-10  hover:bg-gray-50 cursor-pointer">
                               <td className="text-center">{item.title}</td>
                               <td className="text-center">{item.author}</td>
                               <td className="text-center">
                                <TailButton caption='삭제'
                                            color='zinc'
                                            handleClick={()=>handleDelete(item.id)}
                                            size='w-1/2'/>
                                </td>
                               <td className="text-center">
                               <TailButton caption='수정'
                                            color='zinc'
                                            handleClick={()=>handleUpdate(item)}
                                            size='w-1/2'/>
                                </td>

                              </tr>);
  setTrs(tm);
  },[tdata]);

  //컴포넌트가 재렌더링 될때마다 실행
  //useEffect(()=>{})

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-11/12 grid grid-cols-1 md:grid-cols-7 
                      bg-slate-100
                      text-center my-5 p-5">
        <label htmlFor="txt1" className="my-2">제목</label>
        <div className="flex col-span-3">
          <input id="txt1"
            type="text" 
            className="form-input  w-full"
            ref={txt1Ref} />
        </div>
        <label htmlFor="txt2" className="my-2">작성자</label>
        <div className="flex">
          <input id="txt2"
            type="text"
            className="form-input w-full"
             ref={txt2Ref}/>
        </div>
        <TailButton caption = {isUpdate ? '수정' : '입력'}
                  color = "zinc"
                  handleClick = {handleOk} 
                  size='w-1/2'/>  
      </div>
      <table
        className="w-11/12 text-left text-sm font-light text-surface">
        <thead
          className="border-b border-neutral-200 font-medium">
          <tr className="bg-black text-white font-bold text-center">
            <th scope="col" className="px-6 py-3 w-3/6 text-center">제목</th>
            <th scope="col" className="px-6 py-3 w-1/6 text-center">작성자</th>
            <th scope="col" className="px-6 py-3 w-1/6 text-center">삭제</th>
            <th scope="col" className="px-6 py-3 w-1/6 text-center">편집</th>
          </tr>
        </thead>
        <tbody>
          {trs}
          
        </tbody>
      </table>
    </div>
  )
}
