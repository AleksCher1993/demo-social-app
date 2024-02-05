import React from "react";
import c from "./ContactItem.module.css"
import pustoy from "./../../../accets/images/pustoyprofile.jpg"
const ContactItem = ({id,src,name,shortdesctiption, setUserInfo,isActive}) => {
  return (
    <div className={isActive===id?c.contacts_item +" "+c.active:c.contacts_item} onClick={()=>setUserInfo(id,src)}>
      <div className={c.contacts_img}>
        <img src={src?src:pustoy} alt="ava" />
      </div>
      <div  className={c.contacts_content}>
        <p className={c.contacts_name}>{name}</p>
        <p className={c.contacts_shortDescription}>{shortdesctiption}</p>
    </div>
    </div>
  );
};
export default ContactItem;
