import messagesReducer from "./messagesReducer"
import navbarReducer from "./navbarReducer"
import newsfeedReducer from "./newsfeedReducer"

const store={
  _state:{
    newsfeedPage: {
      posts: [
        { id: 1, mess: "one posts", likeCount: 12 },
        { id: 2, mess: "two posts", likeCount: 5 },
        { id: 3, mess: "three posts", likeCount: 7 },
        { id: 4, mess: "four posts", likeCount: 22 },
        { id: 5, mess: "five posts", likeCount: 999 },
      ],
      newTextPost:"hello",
    },
    messagesPage: {
      contacts: [
        {
          id: 1,
          src: "1",
          name: "Alena Dast",
          shortdesctiption: "Hi there. How are you?",
        },
        {
          id: 2,
          src: "2",
          name: "Alena Dast",
          shortdesctiption: "Hi there. How are you?",
        },
        {
          id: 3,
          src: "3",
          name: "Alena Dast",
          shortdesctiption: "Hi there. How are you?",
        },
        {
          id: 4,
          src: "4",
          name: "Alena Dast",
          shortdesctiption: "Hi there. How are you?",
        },
        {
          id: 5,
          src: "5",
          name: "Alena Dast",
          shortdesctiption: "Hi there. How are you?",
        },
        {
          id: 6,
          src: "6",
          name: "Alena Dast",
          shortdesctiption: "Hi there. How are you?",
        },
        {
          id: 7,
          src: "7",
          name: "Alena Dast",
          shortdesctiption: "Hi there. How are you?",
        },
      ],
  
      dialogs: [
        { id: 1, mess: "Hi",name:"Alena Dast" },
        { id: 2, mess: "Hello", name:"Alex Black" },
        { id: 3, mess: "How are you", name:"Alena Dast" },
        { id: 4, mess: "Fine, Thanks!", name:"Alex Black"},
        { id: 5, mess: "Where do you work?!", name:"Alena Dast"},
        { id: 6, mess: "I am not work(", name:"Alex Black"},
        { id: 7, mess: "What is wrong?", name:"Alena Dast"},
        { id: 8, mess: "Do not worry/ It is my fault(", name:"Alex Black"},
        { id: 9, mess: "Understood", name:"Alena Dast"},
      ],
      textDialogs:"",
    },
    navbar:[
      {id:1,href:"/newsfeed",mess:"Newsfeed"},
      {id:2,href:"/messages",mess:"Message"},
      {id:3,href:"/musics",mess:"Musics"},
      {id:4,href:"/images",mess:"Images"},
      {id:5,href:"/videos",mess:"Videos"},
      {id:6,href:"/settings",mess:"Settings"},
      // {id:6,href:"/friends",mess:"Friends"},
    ]
  },
  _callSubskriber(){},
  getState(){
    return this._state
  },

  subscribe(observer){
    this._callSubskriber=observer
  },
  dispatch(action){
    this._state.messagesPage=messagesReducer(this.getState().messagesPage,action)
    this._state.newsfeedPage=newsfeedReducer(this.getState().newsfeedPage,action)
    this._state.navbar=navbarReducer(this.getState().navbar,action)
    this._callSubskriber(this._state)
  },
}

export default store
window.store=store.getState()