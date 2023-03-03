import React from "react";
import img from "../images/img.png";
import {Link} from "react-router-dom";

export default function ContactCard(props) {
  const { id, name, email } = props.contact;

  return (
    <div>
      <div className="container list-group-item ">
        <img
          src={img}
          className="rounded-circle mb-3 float-start my-3 me-3"
          alt="user"
          style={{ width: "30px" }}
        />
        <i
          className="fa-solid fa-trash float-end mt-3"
          onClick={() => props.clickHandler(id)}//trash icon ma click garepaxi contact ko id is passed to props in contact list
        ></i>
         <Link
          to = {`/contact/${id}`}
          state={{contact: props.contact}} 
        >
               <div className="h3">{name}</div>
        <div>{email}</div> </Link>
        
        
        
      </div>
    </div>
  );
}
