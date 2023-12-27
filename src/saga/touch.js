import { call, put, takeLatest } from "@redux-saga/core/effects";
import { API_URL, BASE_URL } from "../axios/config";
import axios from "../axios/index";
import {  TOUCH_DATA } from "../redux/constant";
import { TOUCH_FILE_DATA } from "./constant";
import toast from "react-hot-toast";

async function touchFileAPI(data) {
  return axios.request({
    method: "POST",
    headers: {},
    url: BASE_URL + API_URL.GET_IN_TOUCH,
    data: data
  });
}

function* touchFilesAction(action) {
  let { payload, reject } = action;

  try {
    let response = yield call(touchFileAPI, payload);
    if (response.status === 200) {
      toast .success(response.data.message)
          yield put({ type: TOUCH_DATA, payload: response?.data })
    } else {
    
    }
  } catch (error) {
    if (reject) reject(error);
  }
}

export function* touchFilesData() {
  yield takeLatest(TOUCH_FILE_DATA, touchFilesAction);
}
