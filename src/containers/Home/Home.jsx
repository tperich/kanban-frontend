import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import './Home.scss';
import Board from '../../components/Board/Board';
import { initialData } from '../../data/initialData';

function Home() {
  return (
    <DragDropContext>
      <div className="home">
        <Board title={initialData.board.title} data={initialData} />
      </div>
    </DragDropContext>
  );
}

export default Home;
