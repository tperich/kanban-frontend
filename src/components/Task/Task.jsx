import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';

import { truncate } from '../../utils/textUtils';
import './Task.scss';

function Task({ taskId, title = 'Title', description = 'Description', index }) {
  return (
    <Draggable draggableId={taskId} index={index}>
      {provided => (
        <div
          className="task"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <h4 className="task__title">{title}</h4>
          <div className="task__desc">{truncate(description, 80)}</div>
        </div>
      )}
    </Draggable>
  );
}

Task.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Task;
