import React from "react";

class AddJobForm extends React.Component {
  state = {
    jobTitle: "",
    companyName: "",
    salary: "",
    error: ""
  };
  onRoleChange = e => {
    const jobTitle = e.target.value;
    this.setState(() => ({ jobTitle }));
  };
  onCompanyChange = e => {
    const companyName = e.target.value;
    this.setState(() => ({ companyName }));
  };
  onSalarychange = e => {
    const salary = e.target.value;
    if (salary.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ salary }));
    }
  };
  onSubmit = e => {
    e.preventDefault();
    if (!this.state.jobTitle || !this.state.companyName) {
      this.setState(() => ({ error: "Please enter Role and Company name" }));
    } else {
      this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        jobTitle: this.state.jobTitle,
        companyName: this.state.companyName,
        salary:this.state.salary
      });
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Role"
            autoFocus
            value={this.state.jobTitle}
            onChange={this.onRoleChange}
          />
          <input
            type="text"
            placeholder="Company Name"
            value={this.state.companyName}
            onChange={this.onCompanyChange}
          />
          <input
            type="text"
            placeholder="salary"
            value={this.state.salary}
            onChange={this.onSalarychange}
          />
          <button>Add job</button>
        </form>
      </div>
    );
  }
}

export default AddJobForm;
