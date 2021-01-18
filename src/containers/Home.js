import React from "react";
import "../styles/Home.css";
import Banner from "../Banner";
import Card from "../Card";
import { connect } from "react-redux";



function Home({ companies, jobListings }) {
 
  const renderCompaniesAndJobListings = () => {
    return jobListings.map((job) => {
      const company = companies.find(
        (company) => company.id == job.attributes.company_id
      );
      return (
        <Card
          key={job.id}
          company={company}
          job={job}
        />
      );
    });
  };

  return (
    <div className="home">
      <Banner />

      <div className="home_section">{renderCompaniesAndJobListings()}</div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    companies: state.compRed.companies,
    jobListings: state.jlRed.jobListings,
    jobFilter: state.jlRed.jobFilter,
  };
};

export default connect(mapStateToProps, null)(Home);
