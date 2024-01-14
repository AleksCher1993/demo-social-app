import React from "react";
import { add_post_actionCreator, update_text_post_actionCreator } from "../../redux/newsfeedReducer";
import Newsfeed from "./Newsfeed";
import { connect } from "react-redux";

const mapStateToProps=(state)=>{
  return ({
    newsfeedPage:state.newsfeedPage,
  })
}
const mapDispatchToProps=(dispatch)=>{
  return({
    addPost:(text)=>dispatch(add_post_actionCreator(text)),
  })
}
const NewsfeedContainer=connect(mapStateToProps,mapDispatchToProps)(Newsfeed)
export default NewsfeedContainer