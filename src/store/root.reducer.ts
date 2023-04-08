import { leadsReducer } from "@/store/leads/reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  leads: leadsReducer,
});

export default rootReducer;