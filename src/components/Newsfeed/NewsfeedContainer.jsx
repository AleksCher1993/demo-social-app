import React from "react";
import { addLike, add_post_actionCreator} from "../../redux/newsfeedReducer";
import Newsfeed from "./Newsfeed";
import { connect } from "react-redux";

const NewsfeedContainer=({profile,...props})=>{

  
return <Newsfeed profile={profile} {...props}/>
}

const mapStateToProps=(state)=>{
  return ({
    newsfeedPage:state.newsfeedPage,
  })
}
const mapDispatchToProps=(dispatch)=>{
  return({
    addPost:(text)=>dispatch(add_post_actionCreator(text)),
    addLike:(id,like)=>dispatch(addLike(like))
  })
}
export default connect(mapStateToProps,mapDispatchToProps)(NewsfeedContainer)