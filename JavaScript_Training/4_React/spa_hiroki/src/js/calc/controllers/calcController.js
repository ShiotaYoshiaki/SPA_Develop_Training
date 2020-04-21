import { takeEvery, fork } from "redux-saga/effects";
import {
  PUSH_PLUS_BUTTON_REQUEST,
  PUSH_NUMBER_BUTTON_REQUEST,
  PUSH_EQUAL_REQUEST,
} from "../../const/actionTypes";
import calcService from "../services/calcService";
import numberService from "../services/numberService";
import equalService from "../services/equalService";


function* calc(action) {
  yield fork(calcService.run, action);
}

function* pushButton(action) {
  yield fork(numberService.run, action);
}

function* equal() {
  yield fork(equalService.run);
}

export default function* () {
  yield takeEvery(PUSH_NUMBER_BUTTON_REQUEST, pushButton);
  yield takeEvery(PUSH_PLUS_BUTTON_REQUEST, calc);
  yield takeEvery(PUSH_EQUAL_REQUEST, equal);
}

