import React from "react";
import c from "./Navbar.module.css";
import NavItem from "./NavItem/NavItem";
import ava from "./../../accets/images/ava.jpg"
import { NavLink } from "react-router-dom";
import FriendsItem from "./FriendsItem/FriendsItem";
const Navbar = ({navbar}) => {
  const navbarList=navbar.map(element=><NavItem key={element.id} id={element.id} href={element.href} mess={element.mess} />)
  return (
    <nav className={c.nav}>
      <div className={c.nav__profile}>
        <NavLink to="/profile" className={c.nav__ava}>
          <img src={ava} alt="avatar" />
        </NavLink>
        <p>Alex Black</p>
      </div>
      <div className={c.nav__list}>
        <ul>
          {navbarList}
          <FriendsItem/>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
