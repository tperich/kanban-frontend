import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';

import Column from '../Column/Column';
import { updateBoard } from '../../store/actions/actions';
import './Board.scss';

function Board({ data }) {
  useEffect(() => {
    document.title = `${data.title} | Kanban`;
  }, [data.title]);

  const dispatch = useDispatch();
  const columns = data.columns;

  function onDragEnd({ destination, source, draggableId }) {
    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const sourceColumn = columns[source.droppableId - 1];
    const targetColumn = columns[destination.droppableId - 1];

    if (sourceColumn === targetColumn) {
      handleMoveWithinColumn(sourceColumn, source, destination, draggableId);
      return;
    }

    handleMoveOutsideColumn(
      sourceColumn,
      targetColumn,
      source,
      destination,
      draggableId
    );
  }

  function handleMoveWithinColumn(column, source, destination, draggableId) {
    const newTask = column.tasks.filter(task => task.id === draggableId);

    column.tasks.splice(source.index, 1);
    column.tasks.splice(destination.index, 0, ...newTask);

    dispatch(updateBoard({ ...data }));
  }

  function handleMoveOutsideColumn(
    sourceColumn,
    targetColumn,
    source,
    destination,
    draggableId
  ) {
    const newTask = sourceColumn.tasks.filter(task => task.id === draggableId);
    sourceColumn.tasks.splice(source.index, 1);
    targetColumn.tasks.splice(destination.index, 0, ...newTask);

    dispatch(updateBoard({ ...data }));
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="board">
        {data.columns.map(column => {
          const tasks = column.tasks;

          return (
            <Column
              key={column.id}
              columnId={column.id}
              title={column.title}
              tasks={tasks}
            />
          );
        })}
      </div>
    </DragDropContext>
  );
}

export default Board;
