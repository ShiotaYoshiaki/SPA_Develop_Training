import { takeEvery, select } from 'redux-saga/effects';
import { PUSH_PLUS_BUTTON_REQUEST } from '../../const/actionTypes';
import { PUSH_MINUS_BUTTON_REQUEST } from '../../const/actionTypes';
import { PUSH_MULTIPLY_BUTTON_REQUEST } from '../../const/actionTypes';
import { PUSH_DIVIDE_BUTTON_REQUEST } from '../../const/actionTypes';

function* calc() {
  const state = yield select((state) => state);
  console.log(state);
}
export default function* () {
  yield takeEvery(PUSH_PLUS_BUTTON_REQUEST, PUSH_MINUS_BUTTON_REQUEST,
    PUSH_MULTIPLY_BUTTON_REQUEST, PUSH_DIVIDE_BUTTON_REQUEST, calc);
} 