import { takeEvery, select } from 'redux-saga/effects';
import { PUSH_PLUS_BUTTON_REQUEST } from '../../const/actionTypes';

function* plus() {
  const state = yield select((state) => state);
  console.log(state);
}

export default function* () {
  yield takeEvery(PUSH_PLUS_BUTTON_REQUEST, plus);
}
