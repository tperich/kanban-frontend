import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchBoard } from '../../store/actions/actions';
import Board from '../../components/Board/Board';
import './Home.scss';
import '../../styles/textStyles.scss';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchBoard()), [dispatch]);

  const boardsData = useSelector(state => state.boards);

  function renderBoard() {
    if (!boardsData.isFetching && !boardsData.error) {
      return <Board data={boardsData.board} />;
    } else if (boardsData.isFetching && !boardsData.error) {
      return <h1>Loading...</h1>;
    } else if (boardsData.error) {
      return (
        <h1 className="message--error">
          An unexpected error happened :(
          <br />
          {boardsData.error}
        </h1>
      );
    }
  }

  return <div className="home">{renderBoard()}</div>;
}

export default Home;
