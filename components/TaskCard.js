import React from 'react';
import {Provider} from 'react-redux';

import TaskInfo from './TaskInfo';
import TaskNotes from './TaskNotes';
import TaskComments from './TaskComments';

class TaskCard extends React.Component {
  render() {
    return (
      <Provider store="store">
        <TaskInfo />
        <TaskNotes />
        <TaskComments />
      </Provider>
    );
  }
}