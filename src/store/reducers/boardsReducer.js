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
    title: 'Stuff at home',
    tasks: {
      'task-1': {
        id: 'task-1',
        title: 'Do the dishes',
        description: 'Do all the dishes',
      },
      'task-2': {
        id: 'task-2',
        title: 'Walk the dog',
        description: 'Walk the dog and feed him',
      },
      'task-3': {
        id: 'task-3',
        title: 'Take the trash out',
        description: 'Take the trash out while walking the dog',
      },
      'task-4': {
        id: 'task-4',
        title: 'Buy carrots',
        description: 'Get some more carrots',
      },
      'task-5': {
        id: 'task-5',
        title: 'Make lunch',
        description: "Check if there's bacon and eggs",
      },
    },
    columns: {
      'column-1': {
        id: 'column-1',
        title: 'To Do',
        taskIds: ['task-3', 'task-5'],
      },
      'column-2': { id: 'column-2', title: 'In Progress', taskIds: ['task-2'] },
      'column-3': {
        id: 'column-3',
        title: 'Done',
        taskIds: ['task-1', 'task-4'],
      },
    },
    columnOrder: ['column-1', 'column-2', 'column-3'],
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
