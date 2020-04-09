import { takeEvery, fork } from "redux-saga/effects";
import { PUSH_PLUS_BUTTON_REQUEST } from "../../const/actionTypes";
import { PUSH_MINUS_BUTTON_REQUEST } from "../../const/actionTypes";
import { PUSH_MULTIPLY_BUTTON_REQUEST } from "../../const/actionTypes";
import { PUSH_DIVIDE_BUTTON_REQUEST } from "../../const/actionTypes";
import calcService from "../services/calcService";

function* calc(action) {
  console.log("------------------------action");
  console.log(action);
  yield fork(calcService.run, action);
}
export default function* () {
  yield takeEvery(PUSH_PLUS_BUTTON_REQUEST, calc);
}
