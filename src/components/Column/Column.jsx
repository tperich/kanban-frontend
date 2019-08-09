import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { Droppable } from 'react-beautiful-dnd';

import './Column.scss';
import Task from '../Task/Task';
import '../../styles/buttons.scss';

const addTask = columnId => {
  console.log('Adding task to ', columnId);
};

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
      <Button
        className="add-btn--centered"
        shape="circle"
        icon="plus"
        onClick={() => addTask(columnId)}
      />
    </div>
  );
}

Column.propTypes = {
  title: PropTypes.string,
  tasks: PropTypes.array,
};

export default Column;
