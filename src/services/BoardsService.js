import BaseService from './BaseService';

import { ENDPOINTS } from '../constants/apiConstants';

class BoardsService extends BaseService {
  fetchBoard = async boardId => {
    const path = ENDPOINTS.BOARDS.BOARD_ALL.replace('{board}', boardId);
    return await this.apiClient.get(path);
  };

  updateBoard = async (boardId, boardData) => {
    const path = ENDPOINTS.BOARDS.BOARD.replace('{board}', boardId);
    return await this.apiClient.post(path, boardData);
  };

  addTask = async (boardId, taskData) => {
    const path = ENDPOINTS.BOARDS.TASK.replace('{board}', boardId);
    return await this.apiClient.post(path, taskData);
  };
}

const boardsService = new BoardsService();
export default boardsService;
