import { combineReducers } from "redux";
import manageCompanyReducer from "./manageCompanyReducer";
import manageJobListingReducer from "./manageJobListingReducer";
// import { job_listingReducer } from './job_listingReducer';s

const rootReducer = combineReducers({
  compRed: manageCompanyReducer,
  jlRed: manageJobListingReducer,
});

export default rootReducer;
