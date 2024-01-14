import profileReduser, { setIsStatus, setStatusText } from './profileReducer.js';
import React from 'react';

it('renders ', () => {
    let action=setIsStatus(true)
    let state={
        profile:null,
        statusText:"",
        isStatus:false,
    }
  let reduser=profileReduser(state,action)
  expect(reduser.isStatus).toBe(true);
});
