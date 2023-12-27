
import { all } from "@redux-saga/core/effects";
import { contactFilesData } from "./contact"; 



export default function* rootSaga() {
  yield all([
    contactFilesData(),
   
  ]);
}

