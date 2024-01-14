import React from "react";
import c from "./Post.module.css";
const Post = ({ mess, likeCount }) => {
  return (
    <div className={c.item}>
      <div className={c.item__post}>
        <div>
          <img
            src="https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png"
            alt=""
          />
        </div>
        <p>{mess}</p>
      </div>
      <div className={c.like}>
        <div className={c.likeImg}>
          <img
            src="https://play-lh.googleusercontent.com/k76ozOuC-xOviumqQuWcQ4I73IKwmJyd5iBw8IdouXe9jd1UXwn3QN0dzeSEy28AMg"
            alt=""
          />
        </div>
        <p>{likeCount}</p>
      </div>
    </div>
  );
};
export default Post;
