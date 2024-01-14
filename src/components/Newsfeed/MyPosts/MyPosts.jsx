import React from 'react';
import c from './MyPosts.module.css'
import Post from './Post/Post';
const MyPosts=({posts})=>{

  
    let postsRender=posts.map(post=><Post key={post.id} id={post.id} mess={post.mess} likeCount={post.likeCount}/>)
    
  
    return      <div>
      my posts
      
      <div>
        {postsRender}
      </div>
    </div>

}
export default MyPosts