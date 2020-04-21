import { takeEvery, fork } from "redux-saga/effects";
import { PUSH_PLUS_BUTTON_REQUEST, PUSH_NUMBER_BUTTON_REQUEST } from "../../const/actionTypes";
import calcService from "../services/calcService";


function* calc(action) {
  console.log("------------------------action");
  console.log(action);
  yield fork(calcService.run, action);
} 
export default function* () {
  if( calcService.nextNum === 1) {
  
  yield takeEvery(PUSH_NUMBER_BUTTON_REQUEST, calc);
  }
  yield takeEvery(PUSH_PLUS_BUTTON_REQUEST, calc);
} 