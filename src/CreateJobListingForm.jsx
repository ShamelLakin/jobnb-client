import React, { Component } from "react";
import apiEndPoints from "./utils/config";

class CreateJobListingForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      phone_number: "",
      company_name: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { createOrShowJobListings } = apiEndPoints;
    const { title, description, phone_number } = this.state;

    const data = {
      title,
      description,
      phone_number,
    };

    const company = this.props.companies.find(
      (company) =>
        company.attributes.name.toLowerCase() ===
        this.state.company_name.toLowerCase()
    );

    fetch(createOrShowJobListings(+company.id), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    event.target.reset();
    this.setState({
      title: "",
      description: "",
      phone_number: "",
      company_name: "",
    });
  };

  render() {
    return (
      <div className="job_listing_form">
        <form onSubmit={this.handleSubmit}>
          <div className="company_field">
            <input
              type="text"
              name="company_name"
              placeholder="Company"
              value={this.state.company}
              onChange={this.handleChange}
            />
          </div>
          <div className="title_field">
            <input
              type="text"
              name="title"
              placeholder="Job Title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <div className="description_field">
            <textarea
              type="text"
              name="description"
              placeholder="Job Description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </div>
          <div className="phone_number_field">
            <input
              type="text"
              name="phone_number"
              placeholder="Phone Number"
              value={this.state.phone_number}
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

export default CreateJobListingForm;
