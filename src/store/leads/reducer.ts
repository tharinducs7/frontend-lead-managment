import { LEAD_INITIAL_STATE } from "@/store/leads/_inital_state";
import type { LeadsActions as LeadActions } from "@/store/leads/types";
import * as actionsTypes from "./actions.types";

export const leadsReducer = (
    state = LEAD_INITIAL_STATE,
    action: LeadActions
) => {
    switch (action.type) {
        case actionsTypes.GET_LEADS_LIST_SUCCESS: {
            return {
                ...state,
                fetchStatus: "success",
                leadsList: action.payload,
            };
        }
        case actionsTypes.GET_LEADS_LIST_FAILURE: {
            return {
                ...state,
                fetchStatus: "fail",
                error: action.payload,
            };
        }
        default:
            return { ...state };
    }
};