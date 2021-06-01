import React, { Component } from "react";
import "./styles/App.css";
import Home from "./containers/Home";
import Header from "./Header";
import Footer from "./Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateCompanyForm from "./CreateCompanyForm";
import CreateJobListingForm from "./CreateJobListingForm";
import { connect } from "react-redux";
import { getAllCompaniesAsync } from "./middleware/companyMiddleware";
import { getAllJobListingsAsync } from "./middleware/jobListingsMiddleware";
import apiEndPoints from "./utils/config";
import PopupMessage from "./PopupMessage";

class App extends Component {
  state = {
    jobListings: [],
    companies: [],
    showPopup: false,
    errorMessage: "",
  };

  handleShowPopup = (errorMessage) => {
    this.setState({
      showPopup: true,
      errorMessage,
    });
  };

  handleHidePopup = () => {
    this.setState({
      showPopup: false,
    });
  };

  getAllCompanies = () => {
    fetch(apiEndPoints.createOrShowAllCompanies())
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          companies: data.companies.data,
        });
      });
  };

  getAllJobListings = () => {
    fetch(apiEndPoints.allJobListings())
      .then((response) => response.json())
      .then((data) => {
        const jobs = JSON.stringify(data.job_listings.data);
        localStorage.setItem("jobs", jobs);
        this.setState({
          jobListings: data.job_listings.data,
        });
      });
  };

  getInit = () => {
    this.props.getAllCompaniesAsync();
    this.props.getAllJobListingsAsync();
  };

  componentDidMount() {
    // this.getAllCompanies();
    // this.getAllJobListings();
    this.getInit();
  }

  componentWillUnmount() {
    localStorage.removeItem("jobs");
  }

  render() {
    const { jobListings, companies } = this.state;
    return (
      <div className="app">
        <Router>
          {this.state.showPopup ? (
            <PopupMessage errorMessage={this.state.errorMessage} handleHidePopup={this.handleHidePopup} />
          ) : null}
          <Header />
          <Switch>
            <Route
              path="/create/job_listing"
              render={(routerProps) => (
                <CreateJobListingForm {...routerProps} />
              )}
            />
            <Route
              path="/create/company"
              render={(routerProps) => (
                <CreateCompanyForm
                  handleShowPopup={this.handleShowPopup}
                  {...routerProps}
                />
              )}
            />

            <Route
              path="/"
              render={(routerProps) => (
                <Home
                  jobListings={jobListings}
                  companies={companies}
                  {...routerProps}
                />
              )}
            />
          </Switch>

          <Footer />
        </Router>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllCompaniesAsync: () => dispatch(getAllCompaniesAsync()),
    getAllJobListingsAsync: () => dispatch(getAllJobListingsAsync()),
  };
};

export default connect(null, mapDispatchToProps)(App);
