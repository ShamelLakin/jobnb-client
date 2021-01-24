import React from "react";
import "../styles/Home.css";
import Banner from "../Banner";
import Card from "../Card";
import { connect } from "react-redux";
import { sortJobs, unsortJobs } from "../reducers/manageJobListingReducer";

class Home extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   companies: "",
    //   jobListings: "",
    // };

    // This binding is necessary to make `this` work in the callback
    // this.handleClick = this.handleClick.bind(this);
  }

  handleSort = () => {
    const { jobListings, sortJobs } = this.props;
    sortJobs(jobListings);
  };

  handleUnsort = () => {
    const { jobListings, unsortJobs } = this.props;
    console.log(jobListings);
    unsortJobs();
  };

  renderCompaniesAndJobListings = () => {
    const { companies, jobListings, sortedList } = this.props;
    const jobs = sortedList.length > 0 ? sortedList : jobListings;
    return jobs.map((job) => {
      const company = companies.find(
        (company) => company.id == job.attributes.company_id
      );
      return <Card key={job.id} company={company} job={job} />;
    });
  };

  render() {
    return (
      <div className="home">
        <Banner />
        <button onClick={this.handleUnsort}>Original</button>
        <button onClick={this.handleSort}>Click for A-Z</button>
        <div className="home_section">
          {this.renderCompaniesAndJobListings()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    companies: state.compRed.companies,
    jobListings: state.jlRed.jobListings,
    jobFilter: state.jlRed.jobFilter,
    sortedList: state.jlRed.sortedList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sortJobs: (jobListings) => dispatch(sortJobs(jobListings)),
    unsortJobs: () => dispatch(unsortJobs()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
