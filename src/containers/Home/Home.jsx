import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import './Home.scss';
import Board from '../../components/Board/Board';

function Home() {
  useEffect(() => {
    // Dispatch action to fetch data for boards here
  }, []);

  const boardsData = useSelector(state => state.boards);

  return (
    <div className="home">
      <Board data={boardsData.board} />
    </div>
  );
}

export default Home;
