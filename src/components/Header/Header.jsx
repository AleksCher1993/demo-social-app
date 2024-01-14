import React from "react";
import s from "./Header.module.css";
import logo from "./../../accets/images/logoCF.png";
import { NavLink } from "react-router-dom";
import pustoy from"./../../accets/images/pustoyprofile.jpg"
const Header = (props) => {
  let helloAuth,loginPleace;
  if (props.isLogin) { 
    
    helloAuth=
    <>
    
      <div className={s.ava}>
            {props.src?<img  src={props.src} alt="ava" />:<img src={pustoy} alt="ava" />}
      </div>
      <div>Приветствую, {props.authState.login}, <NavLink onClick={props.deleteLogin}>LogOut</NavLink></div>
    </>
  }else
  loginPleace=<NavLink to="auth">Login</NavLink>
  return (
    <header className={s.header}>
      <div className={s.header__container}>
        <a href="#s" className={s.logo}>
          <div className={s.logo__img}>
            <img src={logo} alt="connect friend" />
          </div>
          <p className={s.logo__name}>Friend Connect</p>
        </a>
        
          
          <div className={s.logoBlock}>
            {props.isLogin?helloAuth:loginPleace}
          </div>
          
        
      </div>
    </header>
  );
};
export default Header;
