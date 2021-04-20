import React from "react";
import "./Form.css";

const Form = ({ submit, change }) => {
  return (
    <div className="form">
      <form onSubmit={submit}>
        <div>
          <label htmlFor="fname">First name:</label>
          <input
            type="text"
            id="fname"
            name="fname"
            onChange={change}
            required
          />
        </div>
        <div>
          <label htmlFor="lname">Last name:</label>
          <input
            type="text"
            id="lname"
            name="lname"
            onChange={change}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone number:</label>
          <input
            type="phone"
            id="phone"
            name="phone"
            onChange={change}
            required
          />
        </div>
        <div>
          <label htmlFor="role">Role:</label>
          <select id="role" name="role" onChange={change}>
            <option value="Teacher">Teacher</option>
            <option value="Student">Student</option>
            <option value="Another">Another</option>
          </select>
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="message"
            onChange={change}
            required
          ></textarea>
        </div>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Form;
