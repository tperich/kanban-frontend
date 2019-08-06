import {
  FETCH_BOARD_REQUEST,
  SET_IS_FECTHING_BOARD,
  FETCH_BOARD_SUCCESS,
  FETCH_BOARD_FAILURE,
  UPDATE_BOARD_REQUEST,
  SET_IS_UPDATING_BOARD,
  UPDATE_BOARD_SUCCESS,
  UPDATE_BOARD_FAILURE
} from './actionTypes';

export const fetchBoard = payload => ({
  type: FETCH_BOARD_REQUEST,
  payload
});

export const setIsFetchingBoard = payload => ({
  type: SET_IS_FECTHING_BOARD,
  payload
});

export const fetchBoardSuccess = payload => ({
  type: FETCH_BOARD_SUCCESS,
  payload
});

export const fetchBoardFailure = payload => ({
  type: FETCH_BOARD_FAILURE,
  payload
});

export const updateBoard = payload => ({
  type: UPDATE_BOARD_REQUEST,
  payload
});

export const setIsUpdatingBoard = payload => ({
  type: SET_IS_UPDATING_BOARD,
  payload
});

export const updateBoardSuccess = payload => ({
  type: UPDATE_BOARD_SUCCESS,
  payload
});

export const updateBoardFailure = payload => ({
  type: UPDATE_BOARD_FAILURE,
  payload
});
