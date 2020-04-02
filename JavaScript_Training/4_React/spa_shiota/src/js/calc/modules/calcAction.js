import { PUSH_PLUS_BUTTON_REQUEST } from '../../const/actionTypes';

/**
 * Actionは、ユーザが起こすイベントを定義します
 */
export function plus() {
  return {type: PUSH_PLUS_BUTTON_REQUEST};
}
