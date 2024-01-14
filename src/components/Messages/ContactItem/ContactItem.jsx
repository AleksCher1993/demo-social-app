import React from "react";
import c from "./ContactItem.module.css"
import ava from "./../../../accets/images/9_2.jpg"
import { NavLink } from "react-router-dom";
const ContactItem = ({src,name,shortdesctiption}) => {
  return (
    <NavLink to={`/messages/${src}`} className={c.contacts_item}>
      <div className={c.contacts_img}>
        <img src={ava} alt="ava" />
      </div>
      <div  className={c.contacts_content}>
        <p className={c.contacts_name}>{name}</p>
        <p className={c.contacts_shortDescription}>{shortdesctiption}</p>
    </div>
      </NavLink>
  );
};
export default ContactItem;
