import {PUSH_PLUS_BUTTON_REQUEST} from "../../const/actionTypes";
import {PUSH_MINUS_BUTTON_REQUEST} from "../../const/actionTypes";
/** from
 * Actionは、ユーザーが起こすイベントを定義します
 */
export function plus() {
    return {type: PUSH_PLUS_BUTTON_REQUEST};
}
export function minus() {
    return {type: PUSH_MINUS_BUTTON_REQUEST};
}

