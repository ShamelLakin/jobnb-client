import React, { Component } from "react";
import apiEndPoints from "./utils/config";

class CreateCompanyForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      companyId: null
    };
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { createOrShowAllCompanies } = apiEndPoints;
    const name = this.state.name;
    const data = {
      name,
    };

    fetch(createOrShowAllCompanies(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => this.setState({ companyId: data.company.data.id }));

    event.target.reset();
    this.setState({ name: "" });
  };

  render() {
    return (
      <div className="company_form">
        <form onSubmit={this.handleSubmit}>
          <div className="name_field">
            <input
              type="text"
              name="company_name"
              placeholder="Company Name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="submit_btn">
            <button type="submit">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateCompanyForm;
