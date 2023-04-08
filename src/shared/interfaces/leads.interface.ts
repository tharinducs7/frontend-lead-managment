import { fetchStatus } from "@/shared/types/fetch-status.type";

export type LeadInterface = {
    id: number
    name?: string | null
    email: string
    phone?: string | null
    image?: string | null
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
    leadList: LeadInterface[];
    fetchStatus: fetchStatus;
    error: string;
}
