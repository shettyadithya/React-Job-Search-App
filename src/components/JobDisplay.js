import React from "react";
import { connect } from "react-redux";
import JobDetails from "./JobDetails";

const JobDisplay = props => (
  <div>
    <h1>Job list</h1>
    {props.jobs.map(jobs => {
      return <JobDetails key={jobs.id} {...jobs} />;
    })}
  </div>
);

const mapStateToProps = state => {
  return {
    jobs: state.jobs
  };
};

export default connect(mapStateToProps)(JobDisplay);
