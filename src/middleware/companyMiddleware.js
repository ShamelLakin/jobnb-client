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
  return async (dispatch) => {
    const formData = {
      name,
      image_url,
    };
    const response = await fetch(apiEndPoints.createOrShowAllCompanies(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log(data);
    if (data.error) return data;
    dispatch(addNewCompany(data.company.data));
    return data;
  };
};
