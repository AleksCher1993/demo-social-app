import React from "react";
import c from "./DialogItem.module.css";
import ava from "./../../../accets/images/9_2.jpg";
import myAva from "./../../../accets/images/ava.jpg";
const DialogItem = ({ mess, name, type }) => {
  
  return (
    <div className={type?`${c.dialog_item} ${c.dialog_reverce}`:c.dialog_item}>
      <div className={c.dialog_img}>
        <img src={type?myAva:ava} alt="" />
      </div>
      <div className={c.dialog_content}>
        <p className={c.dialog_name}>{name}</p>
        <p className={c.dialog_mess}>{mess}</p>
      </div>
    </div>
  );
};
export default DialogItem;
