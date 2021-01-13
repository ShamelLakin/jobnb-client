import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewCompanyAsync } from "./middleware/companyMiddleware";

class CreateCompanyForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      company_name: "",
      image_url: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { company_name, image_url } = this.state;
    this.props.addNewCompanyAsync(company_name, image_url);

    event.target.reset();
    this.setState({ company_name: "", image_url: "" });
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
          <div className="image_field">
            <input
              type="text"
              name="image_url"
              placeholder="Paste image address"
              value={this.state.image_url}
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

const mapDispatchToProps = (dispatch) => {
  return {
    addNewCompanyAsync: (name, image_url) =>
      dispatch(addNewCompanyAsync(name, image_url)),
  };
};

export default connect(null, mapDispatchToProps)(CreateCompanyForm);
