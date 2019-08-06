import { all, takeLatest } from 'redux-saga/effects';

import {
  FETCH_BOARD_REQUEST,
  UPDATE_BOARD_REQUEST,
} from '../actions/actionTypes';
import { fetchBoard, updateBoard } from './boardsSaga';

export default function* rootSaga() {
  yield all([
    takeLatest(FETCH_BOARD_REQUEST, fetchBoard),
    takeLatest(UPDATE_BOARD_REQUEST, updateBoard),
  ]);
}
