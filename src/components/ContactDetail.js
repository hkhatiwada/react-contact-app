import React from 'react'
import { useLocation } from 'react-router-dom';

import img from "../images/img.png";
import {Link} from "react-router-dom";
export default function ContactDetail(props) {
    const location = useLocation();
    const{name, email}= location.state.contact;
    
  return (
    <>
    <div className="card my-5" style={{width : "18rem"}}>
  <img className="card-img-top" src={img} alt="card"/>
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">{email}</p>
  </div>
</div>
<Link to="/"> <button className="btn btn-secondary my-3" >View All Contacts</button></Link>

    </>
  )
}
