import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";
import { connect } from "react-redux";
import { lighten } from "@material-ui/core";

function Home({ companies, jobListings }) {
  {
    /* find company by company_id (which is in a joblisting) */
  }
  const renderCompaniesAndJobListings = () => {
    return jobListings.map((job) => {
      const company = companies.find(
        (company) => company.id == job.attributes.company_id
      );
      const { name, image_url } = company.attributes;
      const { company_name, title, description, phone_number } = job.attributes;
      return (
        <Card
          key={job.id}
          src={image_url}
          company={name}
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

      <div className="home_section">
        {renderCompaniesAndJobListings()}
        {/* <Card
          src="https://cdn.thespaces.com/wp-content/uploads/2021/01/FACTORY-BERLIN.jpg"
          title="Facebook"
          description="Full-stack web developer with a desire to learn"
          phone_number="202-555-1234"
        />
        <Card
          src="https://www.apple.com/v/apple-events/home/n/images/overview/meta/og__fodnljjkwl6y.png?202011061907"
          title="Apple"
          description="Full-stack web developer with a desire to learn"
          phone_number="202-555-1234"
        />
        <Card
          src="https://cdn.thespaces.com/wp-content/uploads/2021/01/Americus-Club-_-Downtown-BEAUTY-SHOPPE.jpg"
          title="Twitter"
          description="Full-stack web developer with a desire to learn"
          phone_number="202-555-1234"
        />
        <Card
          src="https://cnet1.cbsistatic.com/img/NmTo06FvEM6ZR9ld7a3_wlBKz7Y=/1200x675/2019/02/04/8311b046-6f2b-4b98-8036-e765f572efad/msft-microsoft-logo-2-3.jpg"
          title="Microsoft"
          description="Full-stack web developer with a desire to learn"
          phone_number="202-555-1234"
        />
        <Card
          src="https://cdn.thespaces.com/wp-content/uploads/2020/02/Fosbury-Sons-Amsterdam-HERO-1024x663.jpg"
          title="Apple"
          description="Full-stack web developer with a desire to learn"
          phone_number="202-555-1234"
        />
        <Card
          src="https://cdn.thespaces.com/wp-content/uploads/2021/01/Americus-Club-_-Downtown-BEAUTY-SHOPPE.jpg"
          title="Microsoft"
          description="Full-stack web developer with a desire to learn"
          phone_number="202-555-1234"
        /> */}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    companies: state.compRed.companies,
    jobListings: state.jlRed.jobListings,
  };
};

export default connect(mapStateToProps, null)(Home);
