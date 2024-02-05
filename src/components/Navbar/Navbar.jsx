import React from "react";
import c from "./Navbar.module.css";
import NavItem from "./NavItem/NavItem";
import pustoAva from "./../../accets/images/pustoyprofile.jpg"
import { NavLink } from "react-router-dom";
import FriendsItem from "./FriendsItem/FriendsItem";
import Ava from "../Common/ava/Ava";
const Navbar = ({navbar,users,...props}) => {
  const navbarList=navbar.map(element=><NavItem key={element.id} id={element.id} href={element.href} mess={element.mess} />)
  return (
    <nav className={c.nav}>
      <div className={c.nav__profile}>
        <NavLink to="/profile" className={c.nav__ava}>
          {/* <img src={props.profile?(props.profile.photos.small?props.profile.photos.small:pustoAva):pustoAva} alt="avatar" /> */}
          {props.profile? <Ava profile={props.profile} avaSize={props.profile.photos.small}/>:<img src={pustoAva}/>}
        </NavLink>
        <p>{props.profile?props.profile.fullName:""}</p>
      </div>
      <div className={c.nav__list}>
        <ul>
          {navbarList}
          <FriendsItem users={users}/>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
