import React, { useEffect } from "react";
import c from "./Newsfeed.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ava from "./../../accets/images/ava.jpg"
import FormForPost from "../Common/form/formForPost";
import { reduxForm } from "redux-form";
import Ava from "../Common/ava/Ava";

const Newsfeed = ({ profile,newsfeedPage, addPost,addLike,...props}) => {

const onSubmit=(formData)=>{
  
  addPost(formData.body)  
}

  return (
    <main className={c.main}>
      <div className={c.publish}>
        <div className={c.publish__img}>
          {profile&& <Ava profile={profile} avaSize={profile.photos.small}/>}
        </div>
        <FormForPost onSubmit={onSubmit}/>
      </div>
      <div className={c.content}>
        <MyPosts profile={profile} posts={newsfeedPage.posts} addLike={addLike}/>
      </div>
    </main>
  );
};
export default Newsfeed;
