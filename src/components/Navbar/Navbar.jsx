import React, { useCallback, useState } from "react";
import c from "./Navbar.module.css";
import NavItem from "./NavItem/NavItem";
import pustoAva from "./../../accets/images/pustoyprofile.jpg";
import { NavLink, useLocation } from "react-router-dom";
import FriendsItem from "./FriendsItem/FriendsItem";
import Ava from "../Common/ava/Ava";
const Navbar = ({ navbar, users, ...props }) => {
  const [isActive,setActive]=useState(false)
  const location=useLocation()
  const changeBurgerMenu=useCallback(()=>{
    setActive(!isActive)
  },[isActive])
  const navbarList = navbar.map((element) => (
    <NavItem
      key={element.id}
      id={element.id}
      href={element.href}
      mess={element.mess}
      logo={element.logo}
    />
  ));
  return (
    <>
      <nav className={c.nav}>
        <div className={c.nav__profile}>
          <NavLink to="/profile" className={c.nav__ava}>
            {props.profile ? (
              <Ava
                profile={props.profile}
                avaSize={props.profile.photos.small}
              />
            ) : (
              <img src={pustoAva} />
            )}
          </NavLink>
          <p>{props.profile ? props.profile.fullName : ""}</p>
        </div>
        <div className={c.nav__list}>
          <ul>
            {navbarList}
            <FriendsItem users={users} />
          </ul>
        </div>
      </nav>
      <nav className={`${c.navMobile} ${isActive?c.show:""}`}>
        <div className={`${c.burger} ${location.pathname==="/profile"?c.burgerBack:""} ${isActive?c.changeBurgerIcon:""}`} onClick={changeBurgerMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
              <ul className={`${c.block} ${isActive?c.active:""}`}>
                {navbar.map(nav=>
                  <li key={nav.id} onClick={changeBurgerMenu}>
                    <NavLink to={nav.href}><img className={c.logo} src={nav.logo} alt="" /></NavLink>
                  </li>
                  )}
              </ul>
      </nav>
    </>
  );
};
export default Navbar;
