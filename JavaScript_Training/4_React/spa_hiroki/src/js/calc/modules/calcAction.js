import { PUSH_PLUS_BUTTON_REQUEST } from "../../const/actionTypes";
import { PUSH_MINUS_BUTTON_REQUEST } from "../../const/actionTypes";
import { PUSH_MULTIPLY_BUTTON_REQUEST } from "../../const/actionTypes";
import { PUSH_DIVIDE_BUTTON_REQUEST } from "../../const/actionTypes";
import { NUMBER1, NUMBER2, NUMBER3, NUMBER4, NUMBER5, NUMBER6, NUMBER7, NUMBER8, NUMBER9, NUMBER0 } from "../../const/actionTypes";

/** from
 * Actionは、ユーザーが起こすイベントを定義します
 */

export function number1() {
  return { type: NUMBER1 };
}
export function number2() {
  return { type: NUMBER2 };
}
export function number3() {
  return { type: NUMBER3 };
}
export function number4() {
  return { type: NUMBER4 };
}
export function number5() {
  return { type: NUMBER5 };
}
export function number6() {
  return { type: NUMBER6 };
}
export function number7() {
  return { type: NUMBER7 };
}
export function number8() {
  return { type: NUMBER8 };
}
export function number9() {
  return { type: NUMBER9 };
}
export function number0() {
  return { type: NUMBER0 };
}

 export function plus() {
  return { type: PUSH_PLUS_BUTTON_REQUEST };
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
