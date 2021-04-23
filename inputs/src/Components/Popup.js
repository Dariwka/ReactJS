import React from "react";
import "./Popup.css";

const closeHandler = () => {
  window.location.reload();
};

const Popup = ({ fname, lname, phone, role, message, submit }) => {
  return (
    <div className="overlay">
      <div className="popup">
        <h2>Your note:</h2>
        <div>
          <p>
            First name: <span>{fname}</span>
          </p>
          <p>
            Last name: <span>{lname}</span>
          </p>
          <p>
            Phone number: <span>{phone}</span>
          </p>
          <p>
            Role: <span>{role}</span>
          </p>
          <p>
            Message: <message>{message}</message>
          </p>
          <button onClick={submit}>Yes, I'm sure</button>
          <button className="secondary" onClick={closeHandler}>
            No, don't want to post it
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
