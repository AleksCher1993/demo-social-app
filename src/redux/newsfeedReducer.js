const ADD_POST = "ADD-POST";
let initialState={
  posts: [
    { id: 1, mess: "one posts", likeCount: 12 },
    { id: 2, mess: "two posts", likeCount: 5 },
    { id: 3, mess: "three posts", likeCount: 7 },
    { id: 4, mess: "four posts", likeCount: 22 },
    { id: 5, mess: "five posts", likeCount: 999 },
  ],
}
const newsfeedReducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_POST:{
      return {...state,
      posts:[...state.posts,{id:5,mess:action.text,likeCount:0}]
      };
    }
    default:
      return state;
  }
};

export default newsfeedReducer
export const add_post_actionCreator=(text)=>({type:ADD_POST,text}) 