//! defining initial state
const initialState = {
  jobListings: [],
  jobFilter: [],
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
    case FILTER_JOBS:
      return {
        ...state,
        jobListings: action.payload.results,
      };
    case RESET_JOB_LISTINGS:
      return {
        ...state,
        jobListings: action.payload.jobListings,
      };
    case DELETE_JOB_LISTING:
      return {
        ...state,
        jobListings: action.payload.updatedJobListings
      }
    default:
      return state;
  }
}

//! Action Types
const GET_ALL_JOB_LISTINGS = "GET_ALL_JOB_LISTINGS";
const ADD_NEW_JOB_LISTING = "ADD_NEW_JOB_LISTING";
const FILTER_JOBS = "FILTER_JOBS";
const RESET_JOB_LISTINGS = "RESET_JOB_LISTINGS";
const DELETE_JOB_LISTING = "DELETE_JOB_LISTING";

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

export const filterJobs = (query, jobsToFilterThrough) => {
  const results = jobsToFilterThrough.filter((job) => {
    const jobTitle = job.attributes.title.toLowerCase();
    query = query.toLowerCase();
    return jobTitle.includes(query) || jobTitle === query;
  });
  return {
    type: FILTER_JOBS,
    payload: {
      results,
    },
  };
};

export const resetJobListings = (jobListings) => {
  return {
    type: RESET_JOB_LISTINGS,
    payload: {
      jobListings,
    },
  };
};

export const deleteJobListing = (jobListings, jobListingId) => {
  const updatedJobListings = jobListings.filter(job => job.id !== jobListingId)
  return {
    type: DELETE_JOB_LISTING,
    payload: {
      updatedJobListings,
    },
  };
}
