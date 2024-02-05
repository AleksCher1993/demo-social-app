import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userAPI } from "../api/api";

const folow = "follow";
const unfolow = "unfollow";
const set_people="set_people"
const set_totalCount="set_totalCount"
const set_numberPage="set_countAndPageonClick"
const set_isFetching="set_is_fetching"
const add_disabledFollowsWhenFetshing="disabledFollowsWhenFetshing"
const initialState = {
  people:[],
  totalCount:25,
  peopleCount:5,
  numberPage:1,
  isFetching:true,
  disabledFollowsWhenFetshing:[],
};

const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case folow:
      return {
        ...state,
        people: state.people.map((elem) => {
          if (elem.id === action.id) {
            return { ...elem, followed: true };
          }
          return elem;
        }),
      };
    case unfolow:
      return {
        ...state,
        people: state.people.map((elem) => {
          if (elem.id === action.id) {
            return { ...elem, followed: false };
          }
          return elem;
        }),
      };
    case set_people:
      return {...state,
      people:[...action.people]
      }
      case set_totalCount:
      return {...state,
        totalCount:action.totalCount,
      }
      case set_numberPage:

      return {...state,
        numberPage:action.numberPage,
      }
      case set_isFetching:

      return {...state,
        isFetching:action.isFetching,
      }
      case add_disabledFollowsWhenFetshing:

      return {...state,
        disabledFollowsWhenFetshing:action.isFetching
        ?[...state.disabledFollowsWhenFetshing,action.userId]
        :state.disabledFollowsWhenFetshing.filter(id=>id!==action.userId),
      }
    default:
      return state;
  }
};
export default peopleReducer;
export const followSuccess = (id) => {
  return { type: folow, id };
};
export const unfollowSuccess = (id) => {
  return { type: unfolow, id };
};
export const setPeople=(people)=>{
  return {type:set_people,people}
}
export const setTotalCount=(totalCount)=>{
  return {type:set_totalCount,totalCount}
}
export const setNumberPage=(numberPage)=>{
  return {type:set_numberPage,numberPage}
}
export const setIsFetching=(isFetching)=>{
  return {type:set_isFetching,isFetching}
}
export const addDisabledFollowsWhenFetshing=(isFetching,userId)=>{return ({type:add_disabledFollowsWhenFetshing,isFetching,userId})}

export const getUsers=(peopleCount,numberPage)=>(dispatch)=>{
  dispatch(setIsFetching(true))
  userAPI.getUsers(peopleCount,numberPage)
    .then((data) => {
      dispatch(setIsFetching(false))
      dispatch(setTotalCount(data.totalCount));
      return dispatch(setPeople(data.items));
    });
}
export const getOnPaginationClick=(peopleCount,id)=>(dispatch)=>{
  dispatch(setIsFetching(true))
  dispatch(setNumberPage(id))
  userAPI.getUsers(peopleCount,id)
  .then(data=>{
    dispatch(setIsFetching(false))
          return dispatch(setPeople(data.items))
  }
    )
}
export const getFollow=(id)=>(dispatch)=>{
  dispatch(addDisabledFollowsWhenFetshing(true,id))
      userAPI.postFollowedUsers(id)
      .then(data=>{
        if (data.resultCode===0) {
          dispatch(followSuccess(id))
          dispatch(addDisabledFollowsWhenFetshing(false,id))
        }
      })
}
export const getUnFollow=(id)=>(dispatch)=>{
  dispatch(addDisabledFollowsWhenFetshing(true,id))
      userAPI.deleteFollowedUsers(id)
      .then(data=>{
        if (data.resultCode===0) {
          dispatch(unfollowSuccess(id))
          dispatch(addDisabledFollowsWhenFetshing(false,id))
        }
      })
}
// ===========================================================
// =======================Thunk===============================
// ===========================================================
// export const getUsers=createAsyncThunk(
//   "peopleName/getUsers"
//   ,
//   ({peopleCount,numberPage},{dispatch})=>{
//     dispatch(setIsFetching(true))
//     userAPI.getUsers(peopleCount,numberPage)
//     .then((data) => {
//       dispatch(setIsFetching(false))
//       dispatch(setTotalCount({totalCount:data.totalCount}));
//       return dispatch(setPeople(data.items));
//     });
//   }
//   )
//   export const getOnPaginationClick=createAsyncThunk(
//     "peopleName/getOnPaginationClick",
//     ({peopleCount,id},{dispatch})=>{
//       dispatch(setIsFetching(true))
//       dispatch(setNumberPage(id))
      
//       userAPI.getUsers(peopleCount,id)
//       .then(data=>{
        
//       dispatch(setIsFetching(false))
//           return dispatch(setPeople(data.items))
//   }
//     )
//     }
//   )
//   export const getFollow=createAsyncThunk(
//     "peopleName/getFollow",
//     (userId,{dispatch})=>{
//       // dispatch(addDisabledFollowsWhenFetshing({isFetching:true,userId:id}))
      
//       userAPI.postFollowedUsers(userId)
//       .then(data=>{
        
//         if (data.resultCode===0) {
//           dispatch(folow(userId))
//           // dispatch(addDisabledFollowsWhenFetshing({isFetching:false,userId:id}))
//         }
//       })
      
//     }
//   )
//   export const getUnFollow=createAsyncThunk(
//     "peopleName/getUnFollow",
//     (id,{dispatch})=>{
//       // dispatch(addDisabledFollowsWhenFetshing({isFetching:true,userId:id}))
//       userAPI.deleteFollowedUsers(id)
//       .then(data=>{
//         if (data.resultCode===0) {
//           dispatch(unFolow(id))
//           // dispatch(addDisabledFollowsWhenFetshing({isFetching:false,userId:id}))
//         }
//       })
//     }
//   )
// ================================================================
// ========================Redux===================================
// ================================================================


// const peopleReducer=createSlice({
//   name:"peopleName",
//   initialState,
//   reducers:{
//     folow:(state,action)=>{
//       let follower=state.people.find(item=>item.id===action.payload)
//       follower.followed=true
//     },
//     unFolow:(state,action)=>{
      
//       let follower=state.people.find(item=>item.id===action.payload)
//       follower.followed=false
//     },
//     setPeople:(state,action)=>{
//       state.people=action.payload
//     },
//     setTotalCount:(state,action)=>{
//       state.totalCount=action.payload.totalCount
//     },
//     setNumberPage:(state,action)=>{
//       state.numberPage=action.payload
//     },
//     setIsFetching:(state,action)=>{
//       state.isFetching=action.payload
//     },
//     addDisabledFollowsWhenFetshing:(state,action)=>{
//       state.disabledFollowsWhenFetshing=action.payload.isFetching
//       ?state.disabledFollowsWhenFetshing.push(action.payload.userId)
//       :state.disabledFollowsWhenFetshing.filter(id=>id!==action.payload.userId)
//     },
//   }
// })

// export const {folow,unFolow,setPeople,setTotalCount,setNumberPage,setIsFetching,addDisabledFollowsWhenFetshing}=peopleReducer.actions;
// export default peopleReducer.reducer;