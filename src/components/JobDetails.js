import React from "react";
import { Link } from "react-router-dom";

const JobDetails = ({ jobTitle, companyName, salary }) => (
  <div>
    <h3>{jobTitle}</h3>
    <p>
      {companyName}--{salary}
    </p>
    <Link to={`/edit`}>
      <button>Apply</button>
    </Link>
  </div>
);

export default JobDetails;
