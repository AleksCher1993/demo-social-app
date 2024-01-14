import React from 'react';
import classes from './NavItem.module.css'
import { NavLink } from 'react-router-dom';
const NavItem=({mess, href})=>{
    return (
          <li className={`${classes.item}`} >
            <NavLink to={href} className = { navData => navData.isActive ? classes.active : "" }>{mess}</NavLink>
          </li>
    )
}
export default NavItem