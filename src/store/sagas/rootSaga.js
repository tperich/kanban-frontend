import { all, takeLatest } from 'redux-saga/effects';

import {
  FETCH_BOARD_REQUEST,
  UPDATE_BOARD_REQUEST,
  ADD_TASK_REQUEST,
  DEL_TASK_REQUEST,
} from '../actions/actionTypes';
import { fetchBoard, updateBoard, addTask, deleteTask } from './boardsSaga';

export default function* rootSaga() {
  yield all([
    takeLatest(FETCH_BOARD_REQUEST, fetchBoard),
    takeLatest(UPDATE_BOARD_REQUEST, updateBoard),
    takeLatest(ADD_TASK_REQUEST, addTask),
    takeLatest(DEL_TASK_REQUEST, deleteTask),
  ]);
}
