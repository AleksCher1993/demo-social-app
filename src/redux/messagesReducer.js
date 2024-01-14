const ADD_DIALOG = "ADD-DIALOG";
const UPDATE_DIALOG = "UPDATE-DIALOG";
const initialState = {
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
    { id: 1, mess: "Hi", name: "Alena Dast" },
    { id: 2, mess: "Hello", name: "Alex Black" },
    { id: 3, mess: "How are you", name: "Alena Dast" },
    { id: 4, mess: "Fine, Thanks!", name: "Alex Black" },
    { id: 5, mess: "Where do you work?!", name: "Alena Dast" },
    { id: 6, mess: "I am not work(", name: "Alex Black" },
    { id: 7, mess: "What is wrong?", name: "Alena Dast" },
    { id: 8, mess: "Do not worry/ It is my fault(", name: "Alex Black" },
    { id: 9, mess: "Understood", name: "Alena Dast" },
  ],
};
const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DIALOG: {
      // const dialog = {
      //   id: 10,
      //   mess: state.textDialogs,
      //   name: "Alex Black",
      // };
      // let newState = { ...state };
      // newState.dialogs = [...state.dialogs];
      // newState.dialogs.push(dialog);
      // newState.textDialogs = "";
      // return newState;
      return {
        ...state,
        dialogs: [
          ...state.dialogs,
          { id: 10, mess: action.text, name: "Alex Black" },
        ],
      };
    }
    default:
      return state;
  }
};
export default messagesReducer;

export const update_dialog_actionCreator = (text) => ({
  type: UPDATE_DIALOG,
  mess: text,
});
export const add_dialog_actionCreator = (text) => ({ type: ADD_DIALOG,text });
