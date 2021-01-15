import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";
import { connect } from "react-redux";
import { lighten } from "@material-ui/core";
// import { useHistory } from "react-router-dom";

function Home({ companies, jobListings }) {
  // const history = useHistory();
  {
    /* find company by company_id (which is in a joblisting) */
  }
  const renderCompaniesAndJobListings = () => {
    return jobListings.map((job) => {
      const company = companies.find(
        (company) => company.id == job.attributes.company_id
      );
      const companyAttrs = company?.attributes;
      const { title, description, phone_number } = job.attributes;
      return (
        <Card
          // onClick={() => history.push("/search")}
          key={job.id}
          src={companyAttrs?.image_url}
          company={companyAttrs?.name}
          jobTitle={title}
          description={description}
          phone_number={phone_number}
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
