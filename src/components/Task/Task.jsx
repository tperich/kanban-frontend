import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';
import { Menu, Dropdown, Button, Icon } from 'antd';

import { truncate } from '../../utils/textUtils';
import { deleteTask } from '../../store/actions/actions';
import './Task.scss';

function Task({ taskId, title = 'Title', description = 'Description', index }) {
  const dispatch = useDispatch();

  const handleTaskDelete = taskId => {
    dispatch(deleteTask(taskId));
  };

  const taskMenu = (
    <Menu>
      <Menu.Item key="1" onClick={() => handleTaskDelete(taskId)}>
        <Icon type="delete" />
        Delete
      </Menu.Item>
    </Menu>
  );

  return (
    <Draggable draggableId={taskId} index={index}>
      {provided => (
        <div
          className="task"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="title-area">
            <h4 className="task__title">{title}</h4>
            <Dropdown overlay={taskMenu} trigger={['click']}>
              <Button className="title-area__button">...</Button>
            </Dropdown>
          </div>
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
