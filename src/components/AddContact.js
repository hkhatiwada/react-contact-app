import React, { Component } from "react";
import {Link} from "react-router-dom";

//class based component
export default class AddContact extends Component {
  state = {
    name: "",
    email: "",
  };
  
  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("all fields are mandatory");
      return;
    }
    this.props.addContactHandler(this.state); //sends state to addcontacthandler-which gves a unique id in app.js
    this.setState({ name: "", email: "" });
  };

  render() {
    return (
      <div className=" container ">
        <h2>Contact</h2>
        <form onSubmit={this.add}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name "
              className="form-control"
              placeholder="Enter Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="text"
              name="email "
              className="form-control"
              placeholder="Enter email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
         <button className="btn btn-primary" >AddContact</button>
        </form>
        <Link to="/"> <button className="btn btn-secondary my-3" >View All Contacts</button></Link>
      </div>
    );
  }
}
