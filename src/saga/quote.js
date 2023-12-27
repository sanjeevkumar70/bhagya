import { call, put, takeLatest } from "@redux-saga/core/effects";
import { API_URL, BASE_URL } from "../axios/config";
import axios from "../axios/index";
import { QUOTE_DATA } from "../redux/constant";
import { QUOTE_FILE_DATA } from "./constant";
import toast from "react-hot-toast";

async function quoteFileAPI(data) {
  return axios.request({
    method: "POST",
    headers: {},
    url: BASE_URL + API_URL.GET_QUOTE,
    data: data
  });
}

function* quoteFilesAction(action) {
  let { payload, reject } = action;
  console.log(action,"quoteFil")

  try {
    let response = yield call(quoteFileAPI, payload);
    if (response.status === 200) {
      toast.success(response.data.message)
           yield put({ type: QUOTE_DATA, payload: response?.data })
    } else {
    
    }
  } catch (error) {
    if (reject) reject(error);
  }
}

export function* quoteFilesData() {
  yield takeLatest(QUOTE_FILE_DATA, quoteFilesAction);
}
