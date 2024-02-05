import { createSelector } from "reselect";
 const getUsers=(state)=>{
    return state.peoplePage.people
}
 export const getNumberPage=(state)=>{
    return state.peoplePage.numberPage
}
 export const getPeopleCount=(state)=>{
    return state.peoplePage.peopleCount
}
 export const getTotalCount=(state)=>{
    return state.peoplePage.totalCount
}
export const getIsFetching=(state)=>{
    return state.peoplePage.isFetching
}
 const getDisabledFollowsWhenFetshing=(state)=>{
    return state.peoplePage.disabledFollowsWhenFetshing
}
export const getProfile=(state)=>{
    return state.profilePage.profile
}
// ------------------------------reselector---------------------------
export const getUsersSelector=createSelector(getUsers,(people)=>{
    return people.filter(u=>true)
})
export const getNumberPageSelector=createSelector(getNumberPage,(numberPage)=>{
    return numberPage.filter(u=>true)
})
export const getPeopleCountSelector=createSelector(getPeopleCount,(peopleCount)=>{
    return peopleCount.filter(u=>true)
})
export const getTotalCountSelector=createSelector(getTotalCount,(totalCount)=>{
    return totalCount.filter(u=>true)
})
export const getIsFetchingSelector=createSelector(getIsFetching,(isFetching)=>{
    return isFetching.filter(u=>true)
})
export const getDisabledFollowsWhenFetshingSelector=createSelector(getDisabledFollowsWhenFetshing,(disabledFollowsWhenFetshing)=>{
    return disabledFollowsWhenFetshing.filter(u=>true)
})

