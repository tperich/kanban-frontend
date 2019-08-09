import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Button, Modal, Input } from 'antd';
import { Droppable } from 'react-beautiful-dnd';

import Task from '../Task/Task';
import { addTask } from '../../store/actions/actions';
import { INPUTS } from '../../constants/inputConstants';
import './Column.scss';
import '../../styles/buttons.scss';

function Column({ columnId, title = 'To do', tasks }) {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [newTaskState, setNewTaskState] = useState({
    name: '',
    desc: '',
  });

  const handleOk = () => {
    setModalVisible(false);
    dispatch(
      addTask({
        name: newTaskState.name,
        desc: newTaskState.desc,
        column_id: columnId,
      })
    );
  };

  const handleCancel = e => {
    setNewTaskState({ name: '', desc: '' });
    setModalVisible(false);
  };

  const handleModalChange = (e, name) => {
    const value = e.target.value;

    if (name === INPUTS.TASK.NAME) {
      setNewTaskState({ ...newTaskState, name: value });
    } else if (name === INPUTS.TASK.DESC) {
      setNewTaskState({ ...newTaskState, desc: value });
    }
  };

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
        onClick={() => setModalVisible(true)}
      />

      <Modal
        title="Add New Task"
        visible={modalVisible}
        onOk={e => handleOk(e)}
        onCancel={e => handleCancel(e)}
      >
        <Input
          placeholder="Name"
          onChange={e => handleModalChange(e, INPUTS.TASK.NAME)}
        />
        <Input.TextArea
          onChange={e => handleModalChange(e, INPUTS.TASK.DESC)}
          style={{ resize: 'none', marginTop: '10px' }}
          placeholder="Description"
          rows={4}
        />
      </Modal>
    </div>
  );
}

Column.propTypes = {
  columnId: PropTypes.number,
  title: PropTypes.string,
  tasks: PropTypes.array,
};

export default Column;
