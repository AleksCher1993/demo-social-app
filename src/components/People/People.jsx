import React from "react";
import c from "./People.module.css";
import pustoyprofile from "./../../accets/images/pustoyprofile.jpg";
import Preloader from "../Common/Preloader/Preloader";
import { NavLink } from "react-router-dom";
import Pagination from "../Common/Paginator/Paginator";

const People = (props) => {
  
  let peopleList=()=>{
        const peopleList = props.people.map((homos) => {
              return <div key={homos.id} className={c.item}>
                  <NavLink to={`/profile/${homos.id}`} className={c.homosImg}>
                  <div className={c.homosImgBody}><img src={homos.photos.small?homos.photos.small:pustoyprofile} alt="" /></div>
                  </NavLink>
                  <p className={c.fullName}><span>{homos.name}</span></p>
                  <p className={c.status}>{homos.status?homos.status:"no status"}</p>
                  {homos.followed?
                  <button disabled={props.disabledFollowsWhenFetshing.some(id=>id===homos.id)} onClick={()=>{props.unfollow(homos.id)}} className={c.follow}>Unfollow</button>:
                  <button disabled={props.disabledFollowsWhenFetshing.some(id=>id===homos.id)} onClick={()=>props.follow(homos.id)} className={c.follow}>Follow</button>}
              </div>;
            });
            return peopleList
      }
  return (
    <div>
      <Pagination  peopleCount={props.peopleCount} totalCount={props.totalCount} numberPage={props.numberPage} onPaginationClick={props.onPaginationClick}/>
      {props.isFetching?<Preloader/>:<div className={c.peopleList}>{peopleList()}</div>}
    </div>
  );
};
export default People
