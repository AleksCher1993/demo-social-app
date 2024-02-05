import React, { useEffect, useState } from "react";
import s from "./Paginator.module.css"
const Pagination=({peopleCount,totalCount,numberPage,onPaginationClick,portionSize=10,...props})=>{
  
  let pages=[]
  let pagesCountLength=Math.ceil(totalCount/peopleCount)
  let [portionNumber,setPortioNumber]=useState(1)   
  let portionCount=Math.ceil(pagesCountLength/portionSize)      
  let leftCorner=(portionNumber-1)*portionSize+1   
  let rightCorner=portionNumber*portionSize      
  useEffect(()=>setPortioNumber(Math.ceil(numberPage/portionSize)), [numberPage,portionSize])
        for (let index = 1; index <= pagesCountLength; index++) {
          pages.push(index)
        }
        

    return <div className={s.paginationConteiner}>
      {portionNumber>1?
      <button className={`${s.paginControl} ${s.prev}`} onClick={()=>setPortioNumber(portionNumber-1)}>prev</button>
    :<div className={s.divEmpty}></div>}
    <div className={s.paginationNumber}>
      {pages
      .filter(p=>p>=leftCorner&&p<=rightCorner)
      .map(p=><span onClick={()=>onPaginationClick(p)} key={p} className={numberPage===p?s.paginationHover:""}> {p} </span>)}
    </div>
      {portionCount>portionSize&&<button className={`${s.paginControl} ${s.next}`} onClick={()=>setPortioNumber(portionNumber+1)}>next</button>}
    </div>
}
export default Pagination