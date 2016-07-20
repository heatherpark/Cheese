const TaskInfo = ({
  title,
  status,
  dueDate,
  category,
  points
}) => {
  return (
    <div>
      {title}
      {status}
      Due Date: {dueDate}
      {category}
      {points} points
    </div>
  );
};

export default TaskInfo;