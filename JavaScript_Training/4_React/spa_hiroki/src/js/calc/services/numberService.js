import { put, select } from "redux-saga/effects";
import * as TYPES from "../../const/actionTypes";

function* run(action2) {
  console.log('----------------------- in -action2'); console.log(action2);

  const status2 = yield select((state) => state);
  const num = status2.calc.num;
  const nextNum = num + 5;
  
  if (nextNum > 100) {
    yield put({
      type: TYPES.PUSH_NUMBER_BUTTON_SUCCESS,
      payload2 : nextNum,

    });
  } 
}

export default { run };
