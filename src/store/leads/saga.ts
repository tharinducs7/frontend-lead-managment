import { all, call, put, takeLatest } from "redux-saga/effects";
import * as actionTypes from "./actions.types";
import * as actions from "./actions";
import axios from "axios";
import {
LeadInterface,
LeadStateInterface
} from "@/shared/interfaces/leads.interface";
import { toast } from 'react-toast'
// import { TOAST_MESSAGES } from "@/utils/constants";

function getLeadList() {
    return axios.get("https://expressjs-prisma-production-3613.up.railway.app/api/leads", {
        headers: {
            "Content-Type": "application/json",
        },
    });
}

function getLead(id: number) {
    return axios.get(`https://expressjs-prisma-production-3613.up.railway.app/api/leads/${id}`, {
        headers: {
            "Content-Type": "application/json",
        },
    });
}


function* getLeadListSaga() {
    try {
        const leadListResponse: { data: LeadInterface[] } = yield getLeadList();

        if (leadListResponse) {
            yield put(actions.getLeadsListSuccess(leadListResponse.data));
        } else {
            yield put(actions.getLeadsListFailure("Error getting leads details"));
        }
    } catch (error) {
        console.log(error);
        yield put(actions.getLeadsListFailure("Error in leads saga"));
    }
}

function* getLeadSaga(payload: any) {
    try {
        const { id } = payload
        const leadResponse: { data: LeadInterface } = yield getLead(id);

        if (leadResponse) {
            yield put(actions.getLeadSuccess(leadResponse.data));
        } else {
            yield put(actions.getLeadFailure("Error getting leads details"));
        }
    } catch (error) {
        console.log(error);
        yield put(actions.getLeadFailure("Error in leads saga"));
    }
}

function* leadsSaga() {
    yield all([
        takeLatest(actionTypes.GET_LEADS_LIST, getLeadListSaga),
        takeLatest(actionTypes.GET_LEAD, getLeadSaga),
    ]);
}

export default leadsSaga;
