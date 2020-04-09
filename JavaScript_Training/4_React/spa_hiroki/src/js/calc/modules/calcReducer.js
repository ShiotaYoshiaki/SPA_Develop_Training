import { PUSH_PLUS_BUTTON_REQUEST, PUSH_PLUS_BUTTON_SUCCESS } from '../../const/actionTypes';
import { PUSH_MINUS_BUTTON_REQUEST } from '../../const/actionTypes';
import { PUSH_MULTIPLY_BUTTON_REQUEST } from "../../const/actionTypes";
import { PUSH_DIVIDE_BUTTON_REQUEST } from "../../const/actionTypes";

const initialState = {
  num: 0,
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case PUSH_PLUS_BUTTON_SUCCESS:
      return {
        ...state,
        num: action.payload,
      };
    case PUSH_MINUS_BUTTON_REQUEST:
      return {
        ...state,
        num: state.num - 1,
      };
    case PUSH_MULTIPLY_BUTTON_REQUEST:
      return {
        ...state,
        num: state.num * state.num,
      };

    case PUSH_DIVIDE_BUTTON_REQUEST:
      return {
        ...state,
        num: state.num / state.num,
      };
    default:
      return state
  }
}