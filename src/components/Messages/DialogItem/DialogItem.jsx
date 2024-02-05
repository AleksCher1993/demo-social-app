import React from "react";
import c from "./DialogItem.module.css";
import pustoy from "./../../../accets/images/pustoyprofile.jpg"
const DialogItem = ({ src,mess, name, type }) => {
  
  return (
    <div className={type?`${c.dialog_item} ${c.dialog_reverce}`:c.dialog_item}>
      <div className={c.dialog_img}>
        <img src={src?src:pustoy} alt="" />
      </div>
      <div className={c.dialog_content}>
        <p className={c.dialog_name}>{name}</p>
        <p className={c.dialog_mess}>{mess}</p>
      </div>
    </div>
  );
};
export default DialogItem;
