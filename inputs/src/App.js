import React, { Component } from "react";

import "./App.css";

import View from "./Components/View";
import Form from "./Components/Form";
import Popup from "./Components/Popup";

import NotesList from "./Components/NotesList";

class App extends Component {
  state = {
    fname: "",
    lname: "",
    phone: "",
    role: "",
    message: "",
    showPopup: false,
    notes: [],
  };
  componentDidMount() {
    fetch("http://localhost:3002/notes")
      .then((resp) => resp.json())
      .then((data) => this.setState({ notes: data }));
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  popupHandler = (e) => {
    this.setState({ showPopup: true });
    e.preventDefault();
  };

  render() {
    const props = {
      firstname: this.state.fname,
      lastname: this.state.lname,
      phone: this.state.phone,
      role: this.state.role,
      message: this.state.message,
    };
    return (
      <div>
        <Form change={this.changeHandler} submit={this.popupHandler} />
        <View {...props} />
        <NotesList notes={this.state.notes} />
        {this.state.showPopup && <Popup {...props} />}
      </div>
    );
  }
}

export default App;
