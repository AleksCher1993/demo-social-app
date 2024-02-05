import React from "react";
import classes from "./FriendsItem.module.css";
import pusto from "./../../../accets/images/pustoyprofile.jpg"
import Preloader from "../../Common/Preloader/Preloader";
import { NavLink } from "react-router-dom";
import pustoymuch from "./../../../accets/images/pustoymuch.png"
const FriendsItem = ({users}) => {
  let usersList;
  if (users) {
     usersList=users.map(user=>{
      return <div className={classes.userContainer} key={user.id}>
      <NavLink to={`profile/${user.id}`} className={classes.list_item}>
      <img src={user.photos.small?user.photos.small:pusto} alt="" />
    </NavLink>    
      </div> 
  })
}else{
  // usersList=<Preloader/>
  usersList=<div className={classes.pustoy}><img src={pustoymuch} alt="" /></div>
}
  return (
    <li className={`${classes.item}`}>
      <p>Friends</p>
      <div className={classes.list}>
        {usersList}
      </div>
    </li>
  );
};
export default FriendsItem;
