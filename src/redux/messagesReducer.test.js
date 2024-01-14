import messagesReducer, { add_dialog_actionCreator } from "./messagesReducer";
import React from 'react';
it('messageReduser ', () => {
  let action = add_dialog_actionCreator("Heellowing")
const state = {
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
const reduser = messagesReducer(state, action)

expect(reduser.dialogs[9]).toStrictEqual({ id: 10, mess: "Heellowing", name: "Alex Black" });
});
