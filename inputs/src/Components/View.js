import React from "react";
import "./View.css";

const View = ({ fname, lname, phone, role, message }) => {
  return (
    <div className="view">
      <h1>Check your input</h1>
      <div className="notepad">
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
          Message: <span>{message}</span>
        </p>
      </div>
    </div>
  );
};

export default View;
