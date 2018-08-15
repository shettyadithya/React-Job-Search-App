import uuid from "uuid";

export const AddJobs = ({
  jobTitle = "",
  companyName = "",
  salary = 0
} = {}) => ({
  type: "ADD_JOB",
  jobs: {
    id: uuid(),
    jobTitle,
    companyName,
    salary
  }
});
