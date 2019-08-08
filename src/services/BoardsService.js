import BaseService from './BaseService';

import { ENDPOINTS } from '../constants/apiConstants';

class BoardsService extends BaseService {
  fetchBoard = async boardId => {
    const path = ENDPOINTS.BOARDS.BOARD_ALL.replace('{board}', boardId);
    return await this.apiClient.get(path);
  };

  updateBoard = async boardData => {
    return await this.apiClient.post(ENDPOINTS.BOARDS.BOARD, {
      data: boardData,
    });
  };
}

const boardsService = new BoardsService();
export default boardsService;
