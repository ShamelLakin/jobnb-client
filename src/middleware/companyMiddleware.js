import apiEndPoints from "../utils/config";
import {
  getAllCompanies,
  addNewCompany,
} from "../reducers/manageCompanyReducer";

//! fetching all companies
export const getAllCompaniesAsync = () => {
  //! Async Action Creator
  return (dispatch) => {
    fetch(apiEndPoints.createOrShowAllCompanies())
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch(getAllCompanies(data.companies.data));
      });
  };
};

export const addNewCompanyAsync = (name, image_url) => {
  return (dispatch) => {
    const data = {
      name,
      image_url,
    };
    fetch(apiEndPoints.createOrShowAllCompanies(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => dispatch(addNewCompany(data.company.data)));
  };
};
