import React, { Component } from "react";
import "../CSS/App.css";
import fire from "../config/Fire";
//import Home from './Home';
import Login from "./Login";
import Routem from "./routers";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem("user", user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem("user");
      }
    });
  }

  render() {
    return (
      <div className="App">{this.state.user ? <Routem /> : <Login />}</div>
    );
  }
}

export default App;
