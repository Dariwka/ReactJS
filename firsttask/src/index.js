import React from 'react';
import ReactDOM from 'react-dom';

const name = "Diana Korotkevica"
const first_page = 2014;

const Demo = () => {
  return (
    <div>
      <h1>Hello, my nam is {name}</h1>
      <p>I have {2021 - first_page} years of building web pages experience</p>
    </div>
  );
};

ReactDOM.render(<Demo />, document.getElementById('root'));

