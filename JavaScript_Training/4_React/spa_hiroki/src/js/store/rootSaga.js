import { all } from 'redux-saga/effects';
import calcController from '../calc/controllers/calcController';
import numberController from '../calc/controllers/numberController';

export default function* routeSaga() {
   yield all([calcController()]);
}