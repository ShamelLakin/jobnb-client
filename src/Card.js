import React from "react";
import "./styles/Card.css";
import DeleteIcon from "@material-ui/icons/Delete";
import { connect } from "react-redux";
import { deleteJobListingAsync } from "./middleware/jobListingsMiddleware";
import Button from "./utils/Button";

function Card({ company, job, deleteJobListingAsync }) {
  const { title, description, phone_number } = job?.attributes;
  const handleDelete = () => {
    deleteJobListingAsync(job.attributes.company_id, job.id);
  };

  return (
    <div className="card">
      <div className="image_wrapper">
        <img src={company?.attributes.image_url} alt="company logo" />
      </div>
      <div className="card_info">
        <h2>{job.attributes.company_name}</h2>
        <h3>{title}</h3>
        <h4>{description}</h4>
        <div
          className="phone_and_trash"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <h3>{phone_number}</h3>
          <div className="trash" onClick={handleDelete}>
            <DeleteIcon />
          </div>
          <div>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteJobListingAsync: (cId, jlId) =>
      dispatch(deleteJobListingAsync(cId, jlId)),
  };
};

export default connect(null, mapDispatchToProps)(Card);
