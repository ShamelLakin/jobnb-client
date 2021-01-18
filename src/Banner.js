import React from "react";
import "./styles/Banner.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="banner">
      <div className="banner_search" style={{ display: "flex" }}>
        <Button className="banner_searchButton" variant="outlined">
          <Link
            to="/create/company"
            style={{ color: "#ff7779", textDecoration: "none" }}
          >
            Create Company
          </Link>
        </Button>
        <Button className="banner_searchButton" variant="outlined">
          <Link
            to="/create/job_listing"
            style={{ color: "#ff7779", textDecoration: "none" }}
          >
            Create Job
          </Link>
        </Button>
      </div>
      <div className="banner_info">
        <h1>Use your resources</h1>
        <h5>plan. network. succeed.</h5>
       
      </div>
    </div>
  );
}

export default Banner;
