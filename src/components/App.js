import React from 'react';
import Header from './Header';
import AddContacts from './AddContacts';
import ContactList from './ContactList';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import { v4 } from 'uuid';
import { useState, useEffect } from 'react';
function App() {
  const LOCAL_STORAGE_KEY = 'contacts'
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? [])
  const addContactHandler = (contact) => {
    console.log('In App', contact)
    setContacts([...contacts, { id: v4(), ...contact }])
    console.log('App', contacts)
  }
  const removeContactHandler = (id) => {
    // console.log("App")
    // console.log(id)
    let newContactList = contacts.filter((contact) => {
      return id !== contact.id;
    })
    setContacts(newContactList)

  }
  let temp = [
    {
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
  useEffect(() => {
    const retrivedConatacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrivedConatacts) {
      setContacts(retrivedConatacts)
    }
  }, [])
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])
  return (
    <div className='ui container' >

      {/* <AddContacts addContactHandler={addContactHandler} /> */}
      {/* <ContactList contacts={contacts} removeContactHandler={removeContactHandler} /> */}
      <Router>
        <Header />
        <Routes>
          {/* <Route path='/add' component={AddContacts} /> */}
          <Route path='/a' component={ContactList} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
