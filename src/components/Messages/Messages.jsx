import React from "react";
import c from "./Message.module.css";
import ContactItem from "./ContactItem/ContactItem";
import DialogItem from "./DialogItem/DialogItem";
import FormForPost from "../Common/form/formForPost";
const Messages = ({ messagesPage,addDialog }) => {
  const contactlist = messagesPage.contacts.map((contact) => (
    <ContactItem
    key={contact.id}
      id={contact.id}
      src={contact.src}
      name={contact.name}
      shortdesctiption={contact.shortdesctiption}
    />
  ));
  const dialogList = messagesPage.dialogs.map((dialog) => {
    let dialogItem;
    if (dialog.name === "Alex Black") {
      dialogItem = (
        <DialogItem
        key={dialog.id}
          id={dialog.id}
          mess={dialog.mess}
          name={dialog.name}
          type="main"
        />
      );
    } else
      dialogItem = (
        <DialogItem key={dialog.id} id={dialog.id} mess={dialog.mess} name={dialog.name} />
      );
    return dialogItem;
  });
  const onSubmit=(formData)=>{
    
    addDialog(formData.publishTextarea)
  }
  return (
    
      <div className={c.container}>
        <div className={c.body}>
          <div className={c.contacts_list}>{contactlist}</div>
          <div className={c.dialog_list}>{dialogList}</div>
        </div>
        <div className={c.send_body}>
          <div></div>
          <div className={c.textarea}>
            <FormForPost onSubmit={onSubmit}/>
          </div>
        </div>
      </div>
    
  );
};
export default Messages;
