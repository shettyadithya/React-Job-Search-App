import React from "react";
import AddJobForm from "./AddJobForm";
import { connect } from "react-redux";
import { AddJobs } from "../Action/addJob";

const addJobs = props => (
  <div>
    <h1>Add job</h1>
    <AddJobForm
      onSubmit={jobs => {
        props.dispatch(AddJobs(jobs));
        props.history.push("/");
      }}
    />
  </div>
);

export default connect()(addJobs);
