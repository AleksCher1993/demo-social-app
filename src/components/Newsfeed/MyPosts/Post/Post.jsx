import React, { useState } from "react";
import c from "./Post.module.css";
import pusto from "./../../../../accets/images/pustoyprofile.jpg"
import Ava from "../../../Common/ava/Ava";
const Post = ({ id,profile,mess, likeCount,...props }) => {
  let [click,setClick]=useState(likeCount)
  const clickHandler=()=>{
    ++click
    setClick(click)
    props.addLike(id,click)
  }
  return (
    <div className={c.item}>
      <div className={c.item__post}>
        <div>
          {profile&& <Ava profile={profile} avaSize={profile.photos.small}/>}
        </div>
        <p>{mess}</p>
      </div>
      <div className={c.like} onClick={clickHandler}>
        <div className={c.likeImg}>
          <img
            src="https://play-lh.googleusercontent.com/k76ozOuC-xOviumqQuWcQ4I73IKwmJyd5iBw8IdouXe9jd1UXwn3QN0dzeSEy28AMg"
            alt=""
          />
        </div>
        <p>{click}</p>
      </div>
    </div>
  );
};
export default Post;
