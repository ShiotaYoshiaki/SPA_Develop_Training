import { PUSH_PLUS_BUTTON_REQUEST } from '../../const/actionTypes';
import { PUSH_MINUS_BUTTON_REQUEST } from '../../const/actionTypes';

const initialState = {
  num: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    
    case PUSH_PLUS_BUTTON_REQUEST:
      return {
        ...state,
        num: state.num + 1,
      };
    case PUSH_MINUS_BUTTON_REQUEST:
        return {
          ...state,
          num: state.num - 1,
        };

    default:
      return state
  }
}