import { call, put, takeLatest } from "@redux-saga/core/effects";
import { API_URL, BASE_URL } from "../axios/config";
import axios from "../axios/index";
import { CONTACT_DATA } from "../redux/constant";
import { CONTACT_FILE_DATA } from "./constant";

import { toast } from "react-hot-toast";

async function contactFileAPI(data) {
  return axios.request({
    method: "POST",
    headers: {},
    url: BASE_URL + API_URL.CONTACT_US,
    data: data
  });
}

function* conatctFilesAction(action) {
  let { payload, reject } = action;

  try {
    let response = yield call(contactFileAPI, payload);

    if (response.status === 200) {

    toast.success(response.data.message)

          yield put({ type: CONTACT_DATA, payload: response?.data })
    } 
    
    else {
      
    
    }
  } catch (error) {
    if (reject) reject(error);
  }
}

export function* contactFilesData() {
  yield takeLatest(CONTACT_FILE_DATA, conatctFilesAction);
}
