

export default function BoxOfficeTr({mv, handleClick}) {

 


  return (
    
      <tr onClick={handleClick} 
            className="bg-white border-b hover:bg-gray-50 cursor-pointer">
                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {mv.rank}
                </td>
                <td className="px-6 py-2 ">
                    {mv.movieNm}
                </td>
                <td className="px-6 py-2 ">
                    {parseInt(mv.salesAmt).toLocaleString()}
                </td>
                <td className="px-6 py-2 ">
                    {parseInt(mv.audiCnt).toLocaleString()}
                </td>
                <td className="px-6 py-2 ">
                    {mv.rankInten > 0 ?<span className="text-red-900 pr-5">▲</span> :
                     mv.rankInten < 0 ?<span className="text-blue-900 pr-5">▼</span> : "-"}
                    {mv.rankInten !=0 && Math.abs(mv.rankInten)}
                </td>
            </tr>
    
  )
}
