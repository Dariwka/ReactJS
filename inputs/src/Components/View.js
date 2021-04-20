import React from 'react';
import "./View.css";

const View = (props) => {
    return (
        <div className="view">
            <h1>Check your input</h1>
            <div className="notepad">
                <p>
                    First name <span>{props.fname}</span>
                </p>
                <p>
                    Last name <span>{props.lname}</span>
                </p>
                <p>
                    Phone number <span>{props.phone}</span>
                </p>
                <p>
                    Role <span>{props.role}</span>
                </p>
                <p>
                    Message <span>{props.message}</span>
                </p>
            </div>
        </div>
    );
}

export default View;