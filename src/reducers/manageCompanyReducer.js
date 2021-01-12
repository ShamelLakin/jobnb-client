//! defining initial state
const initialState = {
  companies: [],
  companyJobListings: [],
};

//! my company reducer below
export default function manageCompanyReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_COMPANIES:
      return {
        ...state,
        companies: action.payload.companies,
      };
    case ADD_NEW_COMPANY:
      return {
        ...state,
        companies: [...state.companies, action.payload.company],
      };
    case LOAD_COMPANY_JOB_LISTINGS:
      return {
        ...state,
        companyJobListings: action.payload.companyJobListings,
      };
    case ADD_NEW_JOB_LISTING_TO_COMPANY:
      return {
        ...state,
        companyJobListings: [
          ...state.companyJobListings,
          action.payload.companyJobListing,
        ],
      };
    default:
      return state;
  }
}

//! Action Types
const GET_ALL_COMPANIES = "GET_ALL_COMPANIES";
const ADD_NEW_COMPANY = "ADD_NEW_COMPANY";
const LOAD_COMPANY_JOB_LISTINGS = "LOAD_COMPANY_JOB_LISTINGS";
const ADD_NEW_JOB_LISTING_TO_COMPANY = "ADD_NEW_JOB_LISTING_TO_COMPANY";

//! Action Creators
export const getAllCompanies = (companies) => {
  return {
    type: GET_ALL_COMPANIES,
    payload: {
      companies,
    },
  };
};

export const addNewCompany = (company) => {
  return {
    type: ADD_NEW_COMPANY,
    payload: {
      company,
    },
  };
};

export const loadCompanyJobListings = (companyJobListings) => {
  return {
    type: LOAD_COMPANY_JOB_LISTINGS,
    payload: {
      companyJobListings,
    },
  };
};

export const addNewJobListingToCompany = (companyJobListing) => {
  return {
    type: ADD_NEW_JOB_LISTING_TO_COMPANY,
    payload: {
      companyJobListing,
    },
  };
};
