import { PUSH_PLUS_BUTTON_REQUEST } from '../../const/actionTypes';
import { PUSH_MINUS_BUTTON_REQUEST } from '../../const/actionTypes';
import { PUSH_MULTIPLY_BUTTON_REQUEST } from "../../const/actionTypes";
import { PUSH_DIVIDE_BUTTON_REQUEST } from "../../const/actionTypes";
import { PUSH_EQUAL_BUTTON_REQUEST } from "../../const/actionTypes";
import { NUMBER1, NUMBER2, NUMBER3, NUMBER4, NUMBER5, NUMBER6, NUMBER7, NUMBER8, NUMBER9, NUMBER0 } from "../../const/actionTypes";


const initialState = {
  num: 0,
  num2: 0,
 operator: '',
 showingResult: false,
 calculate: false,


};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case NUMBER1:
      return {
        ...state,
        num: (state.num  + '1') * 1,
      };
      case NUMBER2:
      return {
        ...state,
        num: (state.num + '2') * 1, 
      };
      case NUMBER3:
      return {
        ...state,
        num: (state.num + '3') * 1,
      };
      case NUMBER4:
      return {
        ...state,
        num: (state.num + '4') * 1,
      };
      case NUMBER5:
      return {
        ...state,
        num: (state.num + '5') * 1,
      };
      case NUMBER6:
      return {
        ...state,
        num: (state.num + '6') * 1,
      };
      case NUMBER7:
      return {
        ...state,
        num: (state.num + '7') * 1,
      };
      case NUMBER8:
      return {
        ...state,
        num: (state.num + '8') * 1,
      };
      case NUMBER9:
      return {
        ...state,
        num: (state.num + '9') * 1,
      };
      case NUMBER0:
      return {
        ...state,
        num: (state.num + '0') * 1,
      };
      case PUSH_PLUS_BUTTON_REQUEST:
      return {
        ...state,
        operator:'+',
        num: state.num,
      };
    case PUSH_MINUS_BUTTON_REQUEST:
      return {
        ...state,
        operator:'-',
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
     default: return state
  }
}
