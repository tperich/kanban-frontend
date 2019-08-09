import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'antd';

import { fetchBoard } from '../../store/actions/actions';
import Board from '../../components/Board/Board';
import './Home.scss';
import '../../styles/text.scss';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBoard());
  }, [dispatch]);

  const boardsData = useSelector(state => state.boards);

  function renderBoard() {
    if (!boardsData.isFetching && !boardsData.error) {
      return <Board data={boardsData.board} />;
    } else if (boardsData.isFetching && !boardsData.error) {
      return <Button type="dashed" shape="circle-outline" loading />;
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
