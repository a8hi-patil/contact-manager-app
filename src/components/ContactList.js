import React from "react";
import ContactCard from './ContactCard'

const ContactList = (props) => {
  let removeContactHandlerContactList = (id) => {
    // console.log('contactlist');
    props.removeContactHandler(id);
  }
  let contacts = [{
    "id": 1,
    "name": "Abhijit",
    "email": "abhi@gmail.com",
    "phone": "+91 9156212631"
  }, {
    "id": 2,
    "name": "Amol",
    "email": "amol@gmail.com",
    "phone": "+91 9156212632"
  }]
  let renderContactList = contacts.map((contact) => {
    return <ContactCard removeContactHandlerContactList={removeContactHandlerContactList} key={contact.id} contact={contact} />
  })
  return (
    <div className="ui celled list" >
      {renderContactList}
    </div>

  )
}

export default ContactList;