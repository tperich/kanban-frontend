import { call, put } from 'redux-saga/effects';

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
    yield call(boardsService.updateBoard, action.payload);
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
  } catch (error) {
    yield put(addTaskFailure(error.message));
  }
}
