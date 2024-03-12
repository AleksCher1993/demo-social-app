import { userAPI } from "../api/api"

const set_Follower="social-app-get-follower"
let initialState={
  navbarList:[
    {id:1,href:"/profile",mess:"Profile",logo:"https://www.transparentpng.com/thumb/user/gray-user-profile-icon-png-fP8Q1P.png"},
    {id:2,href:"/messages",mess:"Message",logo:"https://static-00.iconduck.com/assets.00/message-icon-2043x2048-z7d1f8at.png"},
    {id:3,href:"/people",mess:"People",logo:"https://e7.pngegg.com/pngimages/406/844/png-clipart-computer-icons-person-user-spark-icon-people-share-icon-thumbnail.png"},
  ],
  items:null,
}
const navbarReducer=(state=initialState,action)=>{
    switch (action.type) {
      case set_Follower:
        
        return {...state,items:action.items};
    
      default:
        return state
    }
    
}

const setFollower=(items)=>({type:set_Follower,items})

export const getFollower=()=>async(dispatch)=>{
  let data=await userAPI.getFollower()
  dispatch(setFollower(data.items))
}

export default navbarReducer