import React from "react";
import s from "./Header.module.css";
import logo from "./../../accets/images/logoCF.png";
import { NavLink } from "react-router-dom";

import Ava from "../Common/ava/Ava";
const Header = (props) => {
  let helloAuth,loginPleace;
  if (props.isLogin) { 
    
    helloAuth=
    <>
    
      <div className={s.ava}>
           {props.profile&& <Ava profile={props.profile} avaSize={props.profile.photos.small}/>}
           <div  className={`${s.avaOptions}`}>
            <ul>
                <li>
                <NavLink to="auth" onClick={props.deleteLogin}>Выйти</NavLink>
                </li>
                
            </ul>
        </div>
      </div>
      {/* <div><NavLink to="auth" onClick={props.deleteLogin}>LogOut</NavLink></div> */}
    </>
  }else
  loginPleace=<NavLink to="auth">Login</NavLink>
  return (
    <header className={s.header}>
      <div className={s.header__container}>
        <NavLink to={"profile"} className={s.logo}>
          <div className={s.logo__img}>
            <img src={logo} alt="connect friend" />
          </div>
          <p className={s.logo__name}>Friend Connect</p>
        </NavLink>
        
          
          <div className={s.logoBlock}>
            {props.isLogin?helloAuth:loginPleace}
          </div>
          
        
      </div>
    </header>
  );
};
export default Header;
