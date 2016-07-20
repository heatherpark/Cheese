import React from 'react';

class TaskCard extends React.Component {
  render() {
    return (
      <div className="task-container">
        <div className="task-info">
          Task Title
          Due Date
          Status
          Category
          Points
        </div>
        <div class="notes">
          <input className="note-input" type="text">
          <ul>
            <li>Notes</li>
          </ul>
        </div>
        <div className="comments">
          <input className="note-input" type="text">
          Comment 1
          Comment 2
        </div>
      </div>
    );
  }
}