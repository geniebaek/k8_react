import TailCard from "../UI/TailCard"
import TailButton from "../UI/TailButton"
import {useRef,useEffect,useState} from "react"



export default function Gallery() {
  const x = useRef();

  const [tdata, setTdata]=useState([]);
  const [tags,setTags]=useState([]);

  const getFetchData=async()=>{
    const apikey=process.env.REACT_APP_API_KEY;
    const keyword=encodeURI(x.current.value)
    let url=`https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?`
    url=`${url}&serviceKey=${apikey}&numOfRows=20&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A`
    url=`${url}&keyword=${keyword}&_type=json`

    console.log(url)

    //fetch(url)
    // .then(resp=>resp.json())
    // .then(data=>console.log(data))
    // .catch(err=>console.error(err))

    const resp=await fetch(url);
    const data=await resp.json();
    console.log("getFetch:", data.response.body.items.item);
    setTdata(data.response.body.items.item);
    
  }

  const handleCancel=()=>{
    x.current.value='';
    x.current.focus();
    setTags([]);
  }

  const handleCheck=()=>{
    //  x.current.value=='' ? alert('키워드를 입력하세요.') : x.current.focus()
    if(x.current.value===''){
      alert('키워드를 입력하세요');
      x.current.focus();
      return
    }
    getFetchData();
  };

  useEffect(()=>{
    x.current.focus()
  },[])

  useEffect(()=>{
    
    const tm= tdata.map(item => <TailCard 
                                  key={item.galContentId}
                                  imgUrl={item.galWebImageUrl}
                                  title={item.galTitle}
                                  content={item.galPhotographyLocation}
                                  kw={item.galSearchKeyword}/>);

      setTags(tm);
  },[tdata]);


  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-10/12 p-5">
        <h1 className="w-full flex justify-center text-3xl mb-5">
          한국 관광공사 사진 정보
        </h1>
        <div className="w-full p-5 bg-slate-100 grid grid-cols-1 lg:grid-cols-2  gap-2">
          <div className="flex justify-center lg:justify-end items-center">
            <input ref={x} type="text" className="w-10/12 form-input"
              id="kw" name="kw" />
          </div>
          <div className="flex justify-center lg:justify-start items-center">
            <TailButton caption='확인'
                         color='zinc' 
                         handleClick = {handleCheck}
                         size = 'w-1/2'/>
            <TailButton caption='취소'
                          color='zinc'
                          handleClick = {handleCancel}  
                          size = 'w-1/2'/>
          </div>

        </div>

      </div>
      <div className="w-10/12 p-2 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2">
        {tags}
      </div>



      {/* <TailCard imgUrl="http://tong.visitkorea.or.kr/cms2/website/52/2586952.jpg"
                 title= "서울빛초롱축제"
                 content="서울특별시 종로구"
                 kw = "서울빛초롱축제, 서울특별시 종로구, 2018 하반기 기획사진, 청계천 야경, 서울 등 축제, 서울 축제"/> */}
    </div>
  )
}
