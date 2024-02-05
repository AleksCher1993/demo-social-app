const ADD_POST = "ADD-POST";
const ADD_like="Social-App/Newsfeed/ADD_like"
let initialState={
  posts: [
    { id: 1, mess: "It`s my first post on newsfeed", likeCount: 12 },
    { id: 2, mess: "I like React + Redux.", likeCount: 5 },
    { id: 3, mess: "i want to be the best react developer.", likeCount: 7 },
    { id: 4, mess: "I know HTML, CSS, JS also.", likeCount: 22 },
    { id: 5, mess: "I know The Universe help me, because i want it))", likeCount: 999 },
  ],
}

const newsfeedReducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_POST:{
      return {...state,
      posts:[...state.posts,{id:6,mess:action.text,likeCount:0}]
      };
    }
    case ADD_like:
      return {...state,...state.posts,likeCount:action.like}
    default:
      return state;
  }
};

export default newsfeedReducer
export const add_post_actionCreator=(text)=>({type:ADD_POST,text}) 
export const addLike=(like)=>({type:ADD_like,like})

// import { createSlice } from "@reduxjs/toolkit";

// const newsfeedReducer = createSlice({
//   name:"newsfeedName",
//   initialState,
//   reducers:{
//     addPost:(state,action)=>{
//       state.posts.push({id:6,mess:action.payload.text,likeCount:0})
//     },
//     addLike:(state,action)=>{
//       let changeLikes=state.posts.find(post=>post.id===action.payload.id)
//       changeLikes.likeCount=action.payload.like
//     }
//   }
// })

// export const {addPost,addLike}=newsfeedReducer.actions;
// export default newsfeedReducer.reducer;

