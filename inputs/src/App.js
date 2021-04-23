import React, { Component } from "react";

import "./App.css";

import View from "./Components/View";
import Form from "./Components/Form";
import Popup from "./Components/Popup";

import NotesList from "./Components/NotesList";

class App extends Component {
  state = {
    notes: [],
    inputData: {
      fname: "",
      lname: "",
      phone: "",
      role: "",
      message: "",
    },
    showPopup: false,
  };

  componentDidMount() {
    fetch("http://localhost:3000/notes")
      .then((resp) => resp.json())
      .then((data) => this.setState({ notes: data }));
  }

  changeHandler = (e) => {
    this.setState({
      inputData: { ...this.state.inputData, [e.target.name]: e.target.value },
    });
  };

  popupHandler = (e) => {
    this.setState({
      showPopup: true,
    });
    e.preventDefault();
  };

  sendDataHandler = () => {
    const requestOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(this.state.inputData),
    };
    fetch("http://localhost:3000/notes", requestOptions);
    alert("Note is posted", window.location.reload());
  };

  render() {
    return (
      <div>
        <Form change={this.changeHandler} submit={this.popupHandler} />
        <View {...this.state.inputData} />
        <NotesList notes={this.state.notes} />
        {this.state.showPopup && (
          <Popup {...this.state.inputData} submit={this.sendDataHandler} />
        )}
      </div>
    );
  }
}

export default App;
