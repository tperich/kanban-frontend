export const initialData = {
  board: {
    title: 'Stuff at home'
  },
  tasks: {
    'task-1': {
      id: 'task-1',
      title: 'Do the dishes',
      description: 'Do all the dishes'
    },
    'task-2': {
      id: 'task-2',
      title: 'Walk the dog',
      description: 'Walk the dog and feed him'
    },
    'task-3': {
      id: 'task-3',
      title: 'Take the trash out',
      description: 'Take the trash out while walking the dog'
    },
    'task-4': {
      id: 'task-4',
      title: 'Buy carrots',
      description: 'Get some more carrots'
    },
    'task-5': {
      id: 'task-5',
      title: 'Make lunch',
      description: "Check if there's bacon and eggs"
    }
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To Do',
      taskIds: ['task-3', 'task-5']
    },
    'column-2': { id: 'column-2', title: 'In Progress', taskIds: ['task-2'] },
    'column-3': { id: 'column-3', title: 'Done', taskIds: ['task-1', 'task-4'] }
  },
  columnOrder: ['column-1', 'column-2', 'column-3']
};
