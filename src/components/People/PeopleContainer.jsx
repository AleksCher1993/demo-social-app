import React, { useEffect } from "react";
import { connect } from "react-redux";
import People from "./People";
// import {
//   follow_AC,
//   set_isFetching_AC,
//   set_numberPage_AC,
//   set_people_AC,
//   set_total_count_AC,
//   unfollow_AC,
// } from "../../redux/peopleReduser";
import {
  getUsers,
  getOnPaginationClick,
  getFollow,
  getUnFollow
} from "../../redux/peopleReduser";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { getDisabledFollowsWhenFetshingSelector, getIsFetching, getNumberPage, getPeopleCount, getTotalCount, getUsersSelector } from "../../redux/selectors/peopleSelectors";

const PeopleAPIContainer=React.memo((props)=>{
  useEffect(()=>{
    props.getUsers(props.peopleCount,props.numberPage)
  },[props.peopleCount,props.numberPage])
    const  onPaginationClick=(id)=>{
     props.getOnPaginationClick(props.peopleCount,id)
  }
    const follow=(id)=>{
      props.getFollow(id)
    }
    const unfollow=(id)=>{
      props.getUnFollow(id)
    }

      return <People totalCount={props.totalCount} peopleCount={props.peopleCount} onPaginationClick={onPaginationClick} numberPage={props.numberPage} people={props.people}
    follow={follow} unfollow={unfollow} isFetching={props.isFetching} disabledFollowsWhenFetshing={props.disabledFollowsWhenFetshing}
    />
}
)
const mapStateToProps = (state) => {
  return {
    people: getUsersSelector(state),
    numberPage: getNumberPage(state),
    peopleCount: getPeopleCount(state),
    totalCount: getTotalCount(state),
    isFetching:getIsFetching(state),
    disabledFollowsWhenFetshing:getDisabledFollowsWhenFetshingSelector(state),
  };
};
// const mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (id) => dispatch(follow_AC(id)),
//     unfollow: (id) => dispatch(unfollow_AC(id)),
//     setPeople: (people) => dispatch(set_people_AC(people)),
//     setTotalCount: (totalCount) => dispatch(set_total_count_AC(totalCount)),
//     setNumberPage: (numberPage) => dispatch(set_numberPage_AC(numberPage)),
//     setIsFetching:(isFetching)=>dispatch(set_isFetching_AC(isFetching)),
//   };
// };

export default compose(connect(mapStateToProps,{getUsers,getOnPaginationClick,getFollow,getUnFollow}),
withAuthRedirect
)
(PeopleAPIContainer);

