export const API = {
  BASE_URL: 'http://localhost:8000',
  BASE_API_URL: 'http://localhost:8000/api',
};

export const ENDPOINTS = {
  BOARDS: {
    BOARD: '/boards/{board}',
    BOARD_ALL: '/boards/{board}/all',
    TASK: {
      NEW: '/task/new',
      DELETE: '/task/delete',
    },
  },
};

export const BOARD_DATA = {
  DEFAULT_BOARD_ID: 1,
};
