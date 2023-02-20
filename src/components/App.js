import React from 'react';
import Header from './Header';
import AddContacts from './AddContacts';
import ContactList from './ContactList';
import { BrowserRouter, Route, Switch, Routes } from 'react-router-dom';
import { v4 } from 'uuid';
import Temp from './Temp'
import { useState, useEffect } from 'react';
import ContactDetails from './ContactDetails'
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
  let te2mp = [
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
      <BrowserRouter>
        <Header />
        {/* <ContactDetails /> */}
        <Routes>
          <Route path='/temp' exact element={<Temp />} />
          <Route path='/contact/:id' exact element={<ContactDetails />} />
          <Route path='/' exact element={<ContactList contacts={contacts} removeContactHandler={removeContactHandler} />} />
          {/* <Route path='/' exact render={(props) => { <ContactList {...props} contacts={contacts} removeContactHandler={removeContactHandler} /> }} /> */}
          {/* <Route path='/add' exact render={(props) => { <AddContacts {...props} addContactHandler={addContactHandler} /> }} /> */}
          <Route path='/add' exact element={<AddContacts addContactHandler={addContactHandler} />} />
          {/* <AddContacts addContactHandler={addContactHandler} /> */}
          {/* <ContactList contacts={contacts} removeContactHandler={removeContactHandler} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
