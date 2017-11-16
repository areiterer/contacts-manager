import React, { Component } from "react";
import "./Contact.css";

function Contact(props) {
  return (
    <div className="contact">
      <span>{props.name}</span>
    </div>
  );
}

export default Contact;
