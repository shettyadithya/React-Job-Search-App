import React, { Component } from "react";
import fire from "../config/Fire";
import { NavLink } from "react-router-dom";
import JobDisplay from "./JobDisplay";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// import AddJob from "./AddJob";

class Home extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    fire.auth().signOut();
  }

  render() {
    return (
      <div>
        <AppBar style={{ color: "#b1a7ff" }} position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Jobx
              <NavLink style={{ marginLeft: "65rem" }} to="/create">
                create job
              </NavLink>
            </Typography>
            <Button
              style={{ marginLeft: "3rem" }}
              color="inherit"
              onClick={this.logout}
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>
        <JobDisplay />
      </div>
    );
  }
}

export default Home;
