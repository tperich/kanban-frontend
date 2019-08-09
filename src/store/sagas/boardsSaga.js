import { call, put } from 'redux-saga/effects';
import { message } from 'antd';

import boardsService from '../../services/BoardsService';
import {
  setIsFetchingBoard,
  fetchBoardSuccess,
  fetchBoardFailure,
  setIsUpdatingBoard,
  updateBoardSuccess,
  updateBoardFailure,
  setIsUpdatingTasks,
  addTaskSuccess,
  addTaskFailure,
  deleteTaskSuccess,
  deleteTaskFailure,
} from '../actions/actions';
import { BOARD_DATA } from '../../constants/apiConstants';

export function* fetchBoard() {
  yield put(setIsFetchingBoard(true));

  try {
    const { data } = yield call(
      boardsService.fetchBoard,
      BOARD_DATA.DEFAULT_BOARD_ID
    );

    yield put(fetchBoardSuccess(data));
  } catch (error) {
    yield put(fetchBoardFailure(error.message));
  }
}

export function* updateBoard(action) {
  yield put(setIsUpdatingBoard(true));

  try {
    yield call(
      boardsService.updateBoard,
      BOARD_DATA.DEFAULT_BOARD_ID,
      action.payload
    );
    yield put(updateBoardSuccess());
  } catch (error) {
    yield put(updateBoardFailure(error));
  }
}

export function* addTask(action) {
  yield put(setIsUpdatingTasks(true));

  try {
    const { data } = yield call(
      boardsService.addTask,
      BOARD_DATA.DEFAULT_BOARD_ID,
      action.payload
    );
    yield put(addTaskSuccess(data));
    yield call(message.success, 'New task added');
  } catch (error) {
    yield put(addTaskFailure(error.message));
    yield call(message.error, `Error: ${error.message}`);
  }
}

export function* deleteTask(action) {
  yield put(setIsUpdatingTasks(true));

  try {
    const { data } = yield call(
      boardsService.deleteTask,
      BOARD_DATA.DEFAULT_BOARD_ID,
      action.payload
    );

    yield put(deleteTaskSuccess(data));
    yield call(message.success, 'Task deleted');
  } catch (error) {
    yield put(deleteTaskFailure(error.message));
    yield call(message.error, `Error: ${error.message}`);
  }
}
