import React from "react";
import ContactCard from './ContactCard'
import { Link } from "react-router-dom";
import { useState } from "react";
const ContactList = (props) => {
  let [searchResult, setSearchResult] = useState([]);
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
  let renderContactList = props.contacts.map((contact) => {
    return <ContactCard removeContactHandlerContactList={removeContactHandlerContactList} key={contact.id} contact={contact} />
  })
  const search = (e) => {
    let searchKey = e.target.value;
    let searchResult = props.contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(searchKey.toLowerCase())
    })
    setSearchResult(searchResult)
    console.log('search', searchResult)

  }
  let renderContactList2 = searchResult.map((contact) => {
    return <ContactCard removeContactHandlerContactList={removeContactHandlerContactList} key={contact.id} contact={contact} />
  })

  return (
    <div className="ui celled list" >
      <h3>Contact list</h3>
      <input type="text" placeholder="search" onChange={search} />
      <Link to='/add' >
        <button className="ui button red" >Add Contact</button>
      </Link>

      {/* {searchResult ? <h1>HO</h1> : renderContactList} */}
      {searchResult.length !== 0 ? renderContactList2 : renderContactList}

    </div>

  )
}

export default ContactList;