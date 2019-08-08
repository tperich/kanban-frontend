import {
  FETCH_BOARD_REQUEST,
  SET_IS_FECTHING_BOARD,
  FETCH_BOARD_SUCCESS,
  FETCH_BOARD_FAILURE,
  UPDATE_BOARD_REQUEST,
  SET_IS_UPDATING_BOARD,
  UPDATE_BOARD_SUCCESS,
  UPDATE_BOARD_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  isFetching: true,
  isUpdating: false,
  error: null,
  board: {
    id: null,
    title: '',
    columns: {},
  },
};

const boardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOARD_REQUEST:
      // Return mock data until we implement Saga
      return state;
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
    case UPDATE_BOARD_REQUEST:
      return {
        ...state,
        board: action.payload,
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
    default:
      return state;
  }
};

export default boardsReducer;
