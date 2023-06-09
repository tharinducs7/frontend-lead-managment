import type * as actionTypes from "./actions.types";
import { LeadInterface } from "@/shared/interfaces/leads.interface";

/****************************** GET LEADS LIST **********************************/
export type GetLeadsList = {
  type: typeof actionTypes.GET_LEADS_LIST;
};

export type GetLeadsListSuccess = {
  type: typeof actionTypes.GET_LEADS_LIST_SUCCESS;
  payload: LeadInterface[];
};

export type GetLeadsListFailure = {
  type: typeof actionTypes.GET_LEADS_LIST_FAILURE;
  payload: string;
};

/****************************** GET LEAD **********************************/
export type GetLead = {
    type: typeof actionTypes.GET_LEAD;
    id: number
};

export type GetLeadSuccess = {
    type: typeof actionTypes.GET_LEAD_SUCCESS;
    payload: LeadInterface;
};

export type GetLeadFailure = {
    type: typeof actionTypes.GET_LEAD_FAILURE;
    payload: string;
};

export type LeadsActions =
    | GetLeadsList
    | GetLeadsListSuccess
    | GetLeadsListFailure
    | GetLead
    | GetLeadSuccess
    | GetLeadFailure;