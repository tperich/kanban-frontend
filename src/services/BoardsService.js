import BaseService from './BaseService';

import { ENDPOINTS } from '../constants/apiConstants';

class BoardsService extends BaseService {
  fetchBoard = async () => {
    return await this.apiClient.get(ENDPOINTS.BOARDS.BOARD);
  };

  updateBoard = async boardData => {
    return await this.apiClient.post(ENDPOINTS.BOARDS.BOARD, {
      data: boardData,
    });
  };
}

const boardsService = new BoardsService();
export default boardsService;
