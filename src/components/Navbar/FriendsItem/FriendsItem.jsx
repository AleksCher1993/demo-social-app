import React from "react";
import classes from "./FriendsItem.module.css";
import ava1 from "./../../../accets/images/9_2.jpg"
const FriendsItem = () => {
  return (
    <li className={`${classes.item}`}>
      <p>Friends</p>
      <div className={classes.list}>
        <a href="#s" className={classes.list_item}>
            <img src={ava1} alt="" />
        </a>
        <a href="#ss" className={classes.list_item}>
            <img src={ava1} alt="" />
        </a>
        <a href="#sss" className={classes.list_item}>
            <img src={ava1} alt="" />
        </a>
        <a href="#ssss" className={classes.list_item}>
            <img src={ava1} alt="" />
        </a>
        <a href="#sssss" className={classes.list_item}>
            <img src={ava1} alt="" />
        </a>
      </div>
    </li>
  );
};
export default FriendsItem;
