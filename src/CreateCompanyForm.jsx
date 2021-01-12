import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewCompanyAsync } from "./middleware/companyMiddleware";

class CreateCompanyForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.addNewCompanyAsync(this.state.name);

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

const mapDispatchToProps = (dispatch) => {
  return {
    addNewCompanyAsync: (name) => dispatch(addNewCompanyAsync(name)),
  };
};

export default connect(null, mapDispatchToProps)(CreateCompanyForm);
