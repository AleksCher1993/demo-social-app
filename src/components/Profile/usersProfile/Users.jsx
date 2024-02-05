import React, { useState } from "react";
import Preloader from "./../../Common/Preloader/Preloader";
import pustoyAva from "./../../../accets/images/pustoyprofile.jpg";
import backProfile from "./../../../accets/images/backProfile.jpg";
import s from "./../Profile.module.css";
import { NavLink } from "react-router-dom";


let Users = ({startDialogHandler,changeStatusText,updateProfilePhoto,submitHandler,isEdit,setIsEdit,...props}) => {
  let [isOpen,setIsOpen]=useState(true)

  // =====================================================
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={s.backProfile}>
        <img src={backProfile} alt="" />
      </div>
      <div className={s.profileInfo}>
      <div  className={`${s.myAva}`}>
          <img 
            src={
              props.profile.photos.large
                ? props.profile.photos.large
                : pustoyAva
            }
            alt="ava"
          />
        </div>        
        <div className={s.profileDescription}>
          <div className={s.fullname}>{props.profile.fullName}</div>
            <div className={s.statusText}>
              {props.statusText || "======"}
            </div>
        </div>
        <div className={s.editProfileBtn}>
          {
          <NavLink to={"/messages"}><button onClick={startDialogHandler}>Написать сообщение</button></NavLink>
          }
        </div>
      </div>
      <div className={s.aboutDescription}>
        <div onClick={()=>setIsOpen(!isOpen)} className={!isOpen?s.downArrow:`${s.downArrow} ${s.arrowRotate}`}><span></span></div>
        <div  className={!isOpen?s.body:`${s.body} ${s.active}`}>
            <ProfileInfo {...props}/>
        </div>
      </div>
      
    </div>
  );
};
const ProfileInfo=(props)=>{
  const aboutMe=()=>{
    return <div className={s.aboutMeDesc}>
      {props.profile.aboutMe
      ?props.profile.aboutMe
      :"add some information..."}
    </div>
  }
  const contactInfoList=()=>{
    return <div className={s.contacts}>
      <ul>
        {Object.keys(props.profile.contacts).map(key=>{
          return <li key={key}>{key} - {props.profile.contacts[key]
            ?props.profile.contacts[key]
            :"add some information..."}</li>
        })}
      </ul>
    </div>
  }
  return <>
  <div className={s.fullnameContainer +" "+s.commonContainer}>
            <div className={s.titleFullname}>Полное имя</div>
            <div>{props.profile.fullName}</div>
          </div>
          <div className={s.aboutmeContainer+" "+ s.commonContainer}>
            <div className={s.title}>О себе</div>
            {aboutMe()}
          </div>
          <div className={s.container +" "+s.commonContainer}>
            <div className={s.contactsTitle}>Контакты</div>
          {contactInfoList()}
          </div>
  </>
}


 export default Users;

