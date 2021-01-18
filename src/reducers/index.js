import { combineReducers } from "redux";
import manageCompanyReducer from "./manageCompanyReducer";
import manageJobListingReducer from "./manageJobListingReducer";


const rootReducer = combineReducers({
  compRed: manageCompanyReducer,
  jlRed: manageJobListingReducer,
});

export default rootReducer;
