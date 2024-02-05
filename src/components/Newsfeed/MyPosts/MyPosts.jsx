import React from 'react';
import c from './MyPosts.module.css'
import Post from './Post/Post';
const MyPosts=({profile,posts,addLike})=>{

  
    let postsRender=posts.map(post=><Post profile={profile} key={post.id} id={post.id} mess={post.mess} likeCount={post.likeCount} addLike={addLike}/>)
    
  
    return      <div> 
      <div>
        {postsRender}
      </div>
    </div>

}
export default MyPosts