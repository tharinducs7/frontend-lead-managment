import { LeadStateInterface } from "@/shared/interfaces/leads.interface";

export const LEAD_INITIAL_STATE: LeadStateInterface = {
  leadsList: [],
  fetchStatus: "idle",
  error: "",
  selectedLead: {}
};
