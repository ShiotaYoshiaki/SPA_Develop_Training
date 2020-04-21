import { put, select } from "redux-saga/effects";
import * as TYPES from "../../const/actionTypes";

function* run(action) {
  const num = action.payload;
  const status = yield select((state) => state);
  const { num: prevNum } = status.calc;
  const nextNum = (prevNum + String(num)) * 1;
  yield put({
    type: TYPES.PUSH_NUMBER_BUTTON_SUCCESS,
    payload: nextNum,
  });
}

export default { run };
