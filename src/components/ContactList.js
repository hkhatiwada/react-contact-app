import React from "react";
import ContactCard from "./ContactCard";
import {Link} from "react-router-dom";

export default function ContactList(props) {
  const deleteContactHandler = (id) => {
    props.getContactid(id);
  };//deletecontact le id payepaxi getContactid props bata parent lai paathauxa-app.js
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}//contactcard bata ako id(through clickHandler) delete contact handler ma janxa ^
        key={contact.id}
      />
    );
  });

  return (
    <>
      <div className="container my-5">
        
        <Link to="/add"> <button className="btn btn-primary float-end ">Add Contact</button></Link>
        <h2>Contact List </h2>
       
        <div className="list-group my-2">{renderContactList}</div>
      </div>
    </>
  );
}
