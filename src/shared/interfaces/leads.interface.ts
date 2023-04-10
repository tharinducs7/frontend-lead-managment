import { fetchStatus } from "../types/fetch.status"

export type LeadInterface = {
    id: number
    name?: string
    email: string
    phone?: string | null
    image?: string
    company?: string | null
    country_code?: string | null
    jobTitle?: string | null
    website?: string | null
    personalizationLine?: string | null
    isValidEmail?: boolean | null
    isApproved?: boolean | null
    comment?: string | null
    industry?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
}


export interface LeadStateInterface {
    leadsList: LeadInterface[];
    fetchStatus: fetchStatus;
    error: string;
}

export interface LeadListResponseInterface {
    data: LeadInterface[];
}
