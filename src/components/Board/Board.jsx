import React, { useEffect, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import Column from '../Column/Column';
import './Board.scss';

function Board({ title = 'New board', data }) {
  useEffect(() => {
    document.title = `${title} | Kanban`;
  }, [title]);

  const [columns, setColumns] = useState(data.columns);

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
      const newTaskIds = Array.from(sourceColumn.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...sourceColumn,
        taskIds: newTaskIds
      };

      setColumns({ ...columns, [newColumn.id]: newColumn });
      return;
    }

    // Moving from one column to another
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

    setColumns({
      ...columns,
      [newSourceColumn.id]: newSourceColumn,
      [newTargetColumn.id]: newTargetColumn
    });
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
