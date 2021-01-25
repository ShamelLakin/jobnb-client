import React from "react";
import "../styles/Home.css";
import Banner from "../Banner";
import Card from "../Card";
import { connect } from "react-redux";

class Home extends React.Component {
  state = {
    sortedList: [],
  };

  handleSort = () => {
    const jobListingsCopy = [...this.props.jobListings];
    const sortedJobListings = jobListingsCopy.sort((a, b) =>
      a.attributes.company_name.localeCompare(b.attributes.company_name)
    );
    this.setState({
      sortedList: sortedJobListings,
    });
  };

  handleUnsort = () => {
    this.setState({
      sortedList: [],
    });
  };

  renderCompaniesAndJobListings = () => {
    const { companies, jobListings } = this.props;
    const { sortedList } = this.state;
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
        <button onClick={this.handleUnsort}>Back</button>
        <button onClick={this.handleSort}>Click for A-Z</button>
        <div className="home_section">
          {this.renderCompaniesAndJobListings()}
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     companies: state.compRed.companies,
//     jobListings: state.jlRed.jobListings,
//     jobFilter: state.jlRed.jobFilter,
//   };
// };

// export default connect(mapStateToProps, null)(Home);
export default Home;
