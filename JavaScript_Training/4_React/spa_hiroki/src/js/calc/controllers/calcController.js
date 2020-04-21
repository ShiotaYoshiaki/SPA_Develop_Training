import { takeEvery, fork } from "redux-saga/effects";
import {
  PUSH_PLUS_BUTTON_REQUEST,
  PUSH_NUMBER_BUTTON_REQUEST,
} from "../../const/actionTypes";
import calcService from "../services/calcService";
import numberService from "../services/numberService";


function* calc(action) {
  yield fork(calcService.run, action);
}

function* pushButton(action) {
  yield fork(numberService.run, action);
}

export default function* () {
  yield takeEvery(PUSH_NUMBER_BUTTON_REQUEST, pushButton);
  yield takeEvery(PUSH_PLUS_BUTTON_REQUEST, calc);
}

