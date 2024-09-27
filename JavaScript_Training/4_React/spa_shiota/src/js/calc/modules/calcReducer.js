import { PUSH_PLUS_BUTTON_REQUEST } from "../../const/actionTypes";

const initialState = {
  num: 0
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case PUSH_PLUS_BUTTON_REQUEST:
      const prevNum = state.num;
      return {
        ...state,
        num: prevNum + 1
      };

    default:
      return state;
  }
}
