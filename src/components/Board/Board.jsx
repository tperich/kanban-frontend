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

    const sourceColumn = columns[source.droppableId];
    const targetColumn = columns[destination.droppableId];

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
    const newTaskIds = Array.from(column.taskIds);
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      taskIds: newTaskIds
    };

    dispatch(
      updateBoard({
        ...data,
        columns: {
          ...columns,
          [newColumn.id]: newColumn
        }
      })
    );
  }

  function handleMoveOutsideColumn(
    sourceColumn,
    targetColumn,
    source,
    destination,
    draggableId
  ) {
    const sourceTaskIds = Array.from(sourceColumn.taskIds);
    sourceTaskIds.splice(source.index, 1);
    const newSourceColumn = {
      ...sourceColumn,
      taskIds: sourceTaskIds
    };

    const targetTaskIds = Array.from(targetColumn.taskIds);
    targetTaskIds.splice(destination.index, 0, draggableId);
    const newTargetColumn = {
      ...targetColumn,
      taskIds: targetTaskIds
    };

    dispatch(
      updateBoard({
        ...data,
        columns: {
          ...columns,
          [newSourceColumn.id]: newSourceColumn,
          [newTargetColumn.id]: newTargetColumn
        }
      })
    );
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="board">
        {data.columnOrder.map(columnId => {
          const column = columns[columnId];
          const tasks = column.taskIds.map(taskId => data.tasks[taskId]);

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
