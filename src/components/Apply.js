import React from "react";
import firebase from "firebase";
import fire from "../config/Fire";
import axios from "axios";


var messageRef = firebase.database().ref("msg");

const storageService = firebase.storage();
const storageRef = storageService.ref();

let selectedFile;
class Apply extends React.Component {
  state = {
    selectedFile: null
  };
  onSubmit = e => {
    e.preventDefault();
    var name = this.getInputValue("name");
    var exp = this.getInputValue("exp");
    var email = this.getInputValue("email");
    var phoneNum = this.getInputValue("phone");
    var msg = this.getInputValue("msg");

    this.saveMessege(name, exp, email, phoneNum, msg);
  };
  getInputValue = id => {
    return document.getElementById(id).value;
  };
  saveMessege = (name, exp, email, phoneNum, msg) => {
    var newMessagesRef = messageRef.push();
    newMessagesRef.set({
      name: name,
      exp: exp,
      email: email,
      phoneNum: phoneNum,
      msg: msg
    });
  };
  //////

  // handleFileUploadChange(e) {
  //   selectedFile = e.target.files[0];
  // }

  // handleFileUploadSubmit(e) {
  //   const uploadTask = storageRef
  //     .child(`images/${selectedFile.name}`)
  //     .put(selectedFile); //create a child directory called images, and place the file inside this directory
  //   uploadTask.on(
  //     "state_changed",
  //     snapshot => {
  //       // Observe state change events such as progress, pause, and resume
  //     },
  //     error => {
  //       // Handle unsuccessful uploads
  //       console.log(error);
  //     },
  //     () => {
  //       // Do something once upload is complete
  //       console.log("success");
  //     }
  //   );
  // }

  ////////

  render() {
    return (
      <div>
        
        <form onSubmit={this.onSubmit}>
          <p>
            <label>Name:</label>
            <input type="text" name="name" id="name" required />
          </p>
          <p>
            <label>Experience:</label>
            <input type="text" name="company" id="exp" />
          </p>
          <p>
            <label>Email Address:</label>
            <input type="text" name="email" id="email" autoComplete="off" />
          </p>
          <p>
            <label>Phone Number:</label>
            <input type="text" name="phone" id="phone" />
          </p>
          <p>
            <label>Message:</label>
            <textarea name="message" rows="5" id="msg" />
          </p>
          {/* <input
            type="file"
            accept="image/*"
            onClick={this.fileSelectHandler}
          /> */}
          <p>
            {/* <button onClick={this.fileUploadHandler}>Confirm</button> */}
            <button type="submit">Submit</button>
          </p>
        </form>
      </div>
    );
  }
}

export default Apply;
