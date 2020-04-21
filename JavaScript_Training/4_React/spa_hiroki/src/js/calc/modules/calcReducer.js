import { PUSH_PLUS_BUTTON_REQUEST, PUSH_NUMBER_BUTTON_SUCCESS } from "../../const/actionTypes";
import { PUSH_MINUS_BUTTON_REQUEST } from "../../const/actionTypes";
import { PUSH_MULTIPLY_BUTTON_REQUEST } from "../../const/actionTypes";
import { PUSH_DIVIDE_BUTTON_REQUEST } from "../../const/actionTypes";


const initialState = {
  /**
   * 左辺
   */
  num: 0,
  /**
   * 右辺
   */
  num2: 0,
  /**
   * 四則演算文字列
   * CALC_PARAMのいずれかが入る
   */
  operator: "",
  /**
   * 計算結果表示中 → true
   * 計算途中 → false
   */
  showingResult: false,
  /**
   * よくわからない
   */
  calculate: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case PUSH_NUMBER_BUTTON_SUCCESS:
      console.log('====================');
      return {
        ...state,
        num: action.payload,
      }

    case PUSH_PLUS_BUTTON_REQUEST:
      return {
        ...state,
        operator: "+",
        num: state.num,
      };
    case PUSH_MINUS_BUTTON_REQUEST:
      return {
        ...state,
        operator: "-",
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
      return state;
  }
}
