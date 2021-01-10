import React, { Component } from "react";
import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import SearchPage from "./SearchPage";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateCompanyForm from "./CreateCompanyForm";
import CreateJobListingForm from "./CreateJobListingForm";
import apiEndPoints from "./utils/config";

class App extends Component {
  state = {
    companies: [],
  };

  getCompanies = () => {
    fetch(apiEndPoints.createOrShowAllCompanies())
      .then((res) => res.json())
      .then((data) => this.setState({ companies: data.companies.data }));
  };

  componentDidMount() {
    this.getCompanies();
  }

  render() {
    return (
      <div className="app">
        <Router>
          <Header />

          <Switch>
            <Route
              path="/create/job_listing"
              render={(routerProps) => (
                <CreateJobListingForm
                  {...routerProps}
                  companies={this.state.companies}
                />
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

export default App;
