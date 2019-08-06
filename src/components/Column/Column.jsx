import React from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';

import './Column.scss';
import Task from '../Task/Task';

function Column({ columnId, title = 'To do', tasks }) {
  return (
    <div className="column">
      <div className="column__title">{title}</div>
      <Droppable droppableId={columnId}>
        {provided => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {tasks.map((task, index) => (
              <Task
                index={index}
                key={task.id}
                taskId={task.id}
                title={task.title}
                description={task.description}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

Column.propTypes = {
  title: PropTypes.string,
  tasks: PropTypes.array
};

export default Column;
