import React, { Component } from "react";
import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import SearchPage from "./SearchPage";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateCompanyForm from "./CreateCompanyForm";
import CreateJobListingForm from "./CreateJobListingForm";
import { connect } from "react-redux";
import { getAllCompaniesAsync } from "./middleware/companyMiddleware";
import { getAllJobListingsAsync } from "./middleware/jobListingsMiddleware";

class App extends Component {
  componentDidMount() {
    this.props.getAllCompaniesAsync();
    this.props.getAllJobListingsAsync();
  }

  render() {
    console.log(this.props);
    return (
      <div className="app">
        <Router>
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
              render={(routerProps) => <CreateCompanyForm {...routerProps} />}
            />
            <Route
              path="/search"
              render={(routerProps) => <SearchPage {...routerProps} />}
            />
            <Route
              path="/"
              render={(routerProps) => <Home {...routerProps} />}
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
