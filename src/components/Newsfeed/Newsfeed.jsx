import React, { useEffect } from "react";
import c from "./Newsfeed.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ava from "./../../accets/images/ava.jpg"
import FormForPost from "../Common/form/formForPost";
import { reduxForm } from "redux-form";

const Newsfeed = ({ newsfeedPage, addPost}) => {

const onSubmit=(formData)=>{
  addPost(formData.publishTextarea)  
}

  return (
    <main className={c.main}>
      <div className={c.publish}>
        <div className={c.publish__img}>
          <img src={ava} alt="avatar" />
        </div>
        <FormForPost onSubmit={onSubmit}/>
      </div>
      <div className={c.content}>
        <MyPosts posts={newsfeedPage.posts} />
      </div>
    </main>
  );
};
export default Newsfeed;
