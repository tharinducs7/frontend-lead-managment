import type * as types from "./types";
import * as actionTypes from "./actions.types";
import { LeadInterface } from "@/shared/interfaces/leads.interface";

/****************************** GET LEADS LIST **********************************/
export const getLeadsList = (): types.GetLeadsList => ({
    type: actionTypes.GET_LEADS_LIST,
});

export const getLeadsListSuccess = (
    payload: LeadInterface[]
): types.GetLeadsListSuccess => ({
    type: actionTypes.GET_LEADS_LIST_SUCCESS,
    payload,
});

export const getLeadsListFailure = (
    payload: string
): types.GetLeadsListFailure => ({
    type: actionTypes.GET_LEADS_LIST_FAILURE,
    payload,
});