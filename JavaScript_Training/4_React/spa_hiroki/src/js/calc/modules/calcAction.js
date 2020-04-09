import { PUSH_PLUS_BUTTON_REQUEST } from "../../const/actionTypes";
import { PUSH_MINUS_BUTTON_REQUEST } from "../../const/actionTypes";
import { PUSH_MULTIPLY_BUTTON_REQUEST } from "../../const/actionTypes";
import { PUSH_DIVIDE_BUTTON_REQUEST } from "../../const/actionTypes";
/** from
 * Actionは、ユーザーが起こすイベントを定義します
 */

export function plus(num) {
  return { type: PUSH_PLUS_BUTTON_REQUEST, payload: num };
}
export function minus() {
  return { type: PUSH_MINUS_BUTTON_REQUEST };
}
export function multiply() {
  return { type: PUSH_MULTIPLY_BUTTON_REQUEST };
}
export function divide() {
  return { type: PUSH_DIVIDE_BUTTON_REQUEST };
}
