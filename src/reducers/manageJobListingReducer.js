//! defining initial state
const initialState = {
  jobListings: [],
};

//! my company reducer below
export default function manageJobListingReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_JOB_LISTINGS:
      return {
        ...state,
        jobListings: action.payload.jobListings,
      };
    case ADD_NEW_JOB_LISTING:
      return {
        ...state,
        jobListings: [...state.jobListings, action.payload.jobListing],
      };
    default:
      return state;
  }
}

//! Action Types
const GET_ALL_JOB_LISTINGS = "GET_ALL_JOB_LISTINGS";
const ADD_NEW_JOB_LISTING = "ADD_NEW_JOB_LISTING";

//! Action Creators
export const getAllJobListings = (jobListings) => {
  return {
    type: GET_ALL_JOB_LISTINGS,
    payload: {
      jobListings,
    },
  };
};

export const addNewJobListing = (jobListing) => {
  return {
    type: ADD_NEW_JOB_LISTING,
    payload: {
      jobListing,
    },
  };
};