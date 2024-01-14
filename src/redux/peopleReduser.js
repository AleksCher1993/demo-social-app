import { userAPI } from "../api/api";

const folow = "follow";
const unfolow = "unfollow";
const set_people="set_people"
const set_totalCount="set_totalCount"
const set_numberPage="set_countAndPageonClick"
const set_isFetching="set_is_fetching"
const add_disabledFollowsWhenFetshing="disabledFollowsWhenFetshing"
const peoplePageInitializer = {
  // people: [
  //   {
  //     id: 0,
  //     isFollow: true,
  //     img: "https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/4/5e2cc15a922f4-bpfull.jpg",
  //     name: "Aleks",
  //     surname: "Black",
  //     country: "Russia",
  //     sityname: "Saint-Petersburg",
  //     friends: 5,
  //     href: "#s",
  //   },
  //   {
  //     id: 1,
  //     isFollow: false,
  //     img: "https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/4/5e2cc15a922f4-bpfull.jpg",
  //     name: "Viktor",
  //     surname: "Coy",
  //     country: "Russia",
  //     sityname: "Moskow",
  //     friends: 55,
  //     href: "#s",
  //   },
  //   {
  //     id: 2,
  //     isFollow: false,
  //     img: "https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/4/5e2cc15a922f4-bpfull.jpg",
  //     name: "Selen",
  //     surname: "Homez",
  //     country: "Russia",
  //     sityname: "Volgograd",
  //     friends: 5555,
  //     href: "#s",
  //   },
  //   {
  //     id: 3,
  //     isFollow: false,
  //     img: "https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/4/5e2cc15a922f4-bpfull.jpg",
  //     name: "Polina",
  //     surname: "Gagarina",
  //     country: "Russia",
  //     sityname: "Samara",
  //     friends: 21,
  //     href: "#s",
  //   },
  //   {
  //     id: 4,
  //     isFollow: true,
  //     img: "https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/4/5e2cc15a922f4-bpfull.jpg",
  //     name: "Aleksandr",
  //     surname: "Shpak",
  //     country: "Russia",
  //     sityname: "Sahalin",
  //     friends: 30,
  //     href: "#s",
  //   },
  //   {
  //     id: 5,
  //     isFollow: false,
  //     img: "https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/4/5e2cc15a922f4-bpfull.jpg",
  //     name: "Irina",
  //     surname: "Olegrova",
  //     country: "Russia",
  //     sityname: "Vladivostok",
  //     friends: 47,
  //     href: "#s",
  //   },
  // ],
  people:[],
  totalCount:25,
  peopleCount:5,
  numberPage:1,
  isFetching:true,
  disabledFollowsWhenFetshing:[],
};

const peopleReducer = (state = peoplePageInitializer, action) => {
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