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
    const basePath = ENDPOINTS.BOARDS.BOARD + ENDPOINTS.BOARDS.TASK.NEW;
    const path = basePath.replace('{board}', boardId);

    return await this.apiClient.post(path, taskData);
  };

  deleteTask = async (boardId, taskId) => {
    const basePath = ENDPOINTS.BOARDS.BOARD + ENDPOINTS.BOARDS.TASK.DELETE;
    const path = basePath.replace('{board}', boardId);

    return await this.apiClient.post(path, { task_id: taskId });
  };
}

const boardsService = new BoardsService();
export default boardsService;
