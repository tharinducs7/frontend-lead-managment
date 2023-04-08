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

function getPokemon(url: string) {
    return axios.get(url, {
        headers: {
            "Content-Type": "application/json",
        },
    });
}

function* getLeadListSaga() {
    try {

        // Getting pokemon information
    
        const leadListResponse: { data: LeadInterface } = yield getLeadList();
        console.log(leadListResponse, "leadListResponse");

        if (leadListResponse) {
            // const pokemonListWithData: LeadInterface[] = pokeList.map(
            //     (responseData) => {
            //         const { data } = responseData;
            //         const { name, id, sprites } = data;
            //         return {
            //             id: id,
            //             name: name,
            //             image: sprites.front_default,
            //         };
            //     }
            // );
          //  yield put(actions.getLeadsListSuccess(pokemonListWithData));
        } else {
            yield put(actions.getLeadsListFailure("Error getting leads details"));
        }
    } catch (error) {
        console.log(error);
        yield put(actions.getLeadsListFailure("Error in leads saga"));
    }
}

function* leadsSaga() {
    yield all([
        takeLatest(actionTypes.GET_LEADS_LIST, getLeadListSaga),
    ]);
}

export default leadsSaga;
