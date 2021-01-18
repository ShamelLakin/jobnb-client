import React, { Component } from "react";
import SearchIcon from "@material-ui/icons/Search";
import "../styles/SearchForm.css";
import { connect } from "react-redux";
import {
  filterJobs,
  resetJobListings,
} from "../reducers/manageJobListingReducer";

class SearchForm extends Component {
  state = {
    query: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });

    this.handleFilter();

    const jobs = JSON.parse(localStorage.getItem("jobs"));
    // console.log(event.target.value.length, this.state.query.length);
    if (event.target.value.length < this.state.query.length)
      this.props.resetJobListings(jobs);
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.handleFilter();
  };

  handleFilter = () => {
    const { filterJobs, jobListings } = this.props;
    const { query } = this.state;
    filterJobs(query, jobListings);
  };

  render() {
    return (
      <form className="search_form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          name="query"
          defaultValue={this.state.query}
          onChange={this.handleChange}
        />
        <button type="submit">
          <SearchIcon />
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    jobListings: state.jlRed.jobListings,
    companies: state.compRed.companies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterJobs: (query, companies, jobs) =>
      dispatch(filterJobs(query, companies, jobs)),
    resetJobListings: (jobs) => dispatch(resetJobListings(jobs)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
