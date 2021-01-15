import {
  addNewJobListing,
  getAllJobListings,
} from "../reducers/manageJobListingReducer";
import {
  addNewJobListingToCompany,
  loadCompanyJobListings,
} from "../reducers/manageCompanyReducer";
import apiEndPoints from "../utils/config";

export const getAllJobListingsAsync = () => {
  return (dispatch) => {
    fetch(apiEndPoints.allJobListings())
      .then((response) => response.json())
      .then((data) => {
        const jobs = JSON.stringify(data.job_listings.data)
        localStorage.setItem("jobs", jobs);
        dispatch(getAllJobListings(data.job_listings.data));
      });
  };
};

export const addNewJobListingAsync = (
  companyId,
  title,
  description,
  phone_number
) => {
  return (dispatch, getState) => {
    const data = {
      title,
      description,
      phone_number,
    };
    const company = getState().compRed.companies.find(
      (company) => company.id == companyId
    );
    dispatch(loadCompanyJobListings(company.attributes.job_listings));
    fetch(apiEndPoints.createOrShowJobListings(companyId), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(addNewJobListing(data.job_listing.data)); // add to all job listings array
        dispatch(addNewJobListingToCompany(data.job_listing.data)); // add to specific companies job listings
      });
  };
};
