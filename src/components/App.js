import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import {
  BrowserRouter,
  Routes, 
  Route,
} from "react-router-dom";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
function App() {
  const [contacts, setContacts] = useState([]);
  const local_key = "contacts";

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  }; //yo function le id payepaxi filter garxa ani del garxa

  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem(local_key));
    setContacts(data);
  }, []);

  useEffect(() => {
    window.localStorage.setItem(local_key, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="App container">

      <BrowserRouter> 
      <Header />
      <Routes>
      <Route exact path="/" element={<ContactList contacts={contacts} getContactid={removeContactHandler} />}/> 

        <Route exact path="/add" element={<AddContact addContactHandler={addContactHandler} />}/> 
        <Route exact path="/contact/:id" element={<ContactDetail/>}/> 
      </Routes>
      </BrowserRouter>
      
    </div>
  ); //get contact id le contact list bata id pauxa and remove contcat handler lai invoke garrxa
} 

export default App;
