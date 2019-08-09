import {
  FETCH_BOARD_REQUEST,
  SET_IS_FECTHING_BOARD,
  FETCH_BOARD_SUCCESS,
  FETCH_BOARD_FAILURE,
  UPDATE_BOARD_REQUEST,
  SET_IS_UPDATING_BOARD,
  UPDATE_BOARD_SUCCESS,
  UPDATE_BOARD_FAILURE,
  ADD_TASK_REQUEST,
  ADD_TASK_SUCCESS,
  ADD_TASK_FAILURE,
  SET_IS_UPDATING_TASKS,
} from './actionTypes';

// Fetch board
export const setIsFetchingBoard = payload => ({
  type: SET_IS_FECTHING_BOARD,
  payload,
});

export const fetchBoard = payload => ({
  type: FETCH_BOARD_REQUEST,
  payload,
});

export const fetchBoardSuccess = payload => ({
  type: FETCH_BOARD_SUCCESS,
  payload,
});

export const fetchBoardFailure = payload => ({
  type: FETCH_BOARD_FAILURE,
  payload,
});

// Update board
export const setIsUpdatingBoard = payload => ({
  type: SET_IS_UPDATING_BOARD,
  payload,
});

export const updateBoard = payload => ({
  type: UPDATE_BOARD_REQUEST,
  payload,
});

export const updateBoardSuccess = payload => ({
  type: UPDATE_BOARD_SUCCESS,
  payload,
});

export const updateBoardFailure = payload => ({
  type: UPDATE_BOARD_FAILURE,
  payload,
});

// Tasks
export const setIsUpdatingTasks = payload => ({
  type: SET_IS_UPDATING_TASKS,
  payload,
});

export const addTask = payload => ({
  type: ADD_TASK_REQUEST,
  payload,
});

export const addTaskSuccess = payload => ({
  type: ADD_TASK_SUCCESS,
  payload,
});

export const addTaskFailure = payload => ({
  type: ADD_TASK_FAILURE,
  payload,
});
