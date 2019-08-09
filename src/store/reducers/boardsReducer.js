import {
  SET_IS_FECTHING_BOARD,
  FETCH_BOARD_SUCCESS,
  FETCH_BOARD_FAILURE,
  SET_IS_UPDATING_BOARD,
  UPDATE_BOARD_SUCCESS,
  UPDATE_BOARD_FAILURE,
  SET_IS_UPDATING_TASKS,
  ADD_TASK_SUCCESS,
  ADD_TASK_FAILURE,
  DEL_TASK_SUCCESS,
  DEL_TASK_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  isFetching: true,
  isUpdating: false,
  isUpdatingTasks: false,
  error: null,
  board: {
    id: null,
    title: '',
    columns: {},
  },
};

const boardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_FECTHING_BOARD:
      return {
        ...state,
        isFetching: action.payload,
      };
    case FETCH_BOARD_SUCCESS:
      return {
        ...state,
        board: action.payload,
        isFetching: false,
        error: null,
      };
    case FETCH_BOARD_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case SET_IS_UPDATING_BOARD:
      return {
        ...state,
        isUpdating: action.payload,
      };
    case UPDATE_BOARD_SUCCESS:
      return {
        ...state,
        isUpdating: false,
        error: null,
      };
    case UPDATE_BOARD_FAILURE:
      return {
        ...state,
        isUpdating: false,
        error: null,
      };
    case SET_IS_UPDATING_TASKS:
      return {
        ...state,
        isUpdatingTasks: action.payload,
      };
    case ADD_TASK_SUCCESS:
      return {
        ...state,
        board: action.payload,
        isUpdatingTasks: false,
        error: null,
      };
    case ADD_TASK_FAILURE:
      return {
        ...state,
        isUpdatingTasks: false,
        error: action.payload,
      };
    case DEL_TASK_SUCCESS:
      return {
        ...state,
        board: action.payload,
        isUpdatingTasks: false,
        error: null,
      };
    case DEL_TASK_FAILURE:
      return {
        ...state,
        isUpdatingTasks: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default boardsReducer;
