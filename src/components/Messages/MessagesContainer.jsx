import React from "react";
import {
  add_dialog_actionCreator,
} from "../../redux/messagesReducer";
import Messages from "./Messages";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addDialog: (text) => {
      dispatch(add_dialog_actionCreator(text));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Messages);
