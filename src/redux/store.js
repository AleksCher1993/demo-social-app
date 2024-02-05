import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux"; 
import newsfeedReducer from "./newsfeedReducer";
import messagesReducer from "./messagesReducer";
import navbarReducer from "./navbarReducer";
import peopleReducer from "./peopleReduser";
import profileReduser from "./profileReducer";
import headerReducer from "./headerReducer";
import {thunk} from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import appReduser from "./appReduser";
import { compose } from "redux";

let reducers=combineReducers({
    newsfeedPage:newsfeedReducer,
    messagesPage:messagesReducer,
    navbar:navbarReducer,
    peoplePage:peopleReducer,
    profilePage:profileReduser,
    auth:headerReducer,
    form:formReducer,
    app:appReduser,
})

// const store=createStore(reducers,applyMiddleware(thunk))

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers,composeEnhancers(
    applyMiddleware(thunk)
  ));


export default store
