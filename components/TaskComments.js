const TaskComments = ({
  comments
}) => {
  return (
    <div>
      <textarea rows="4" cols="50">
        Leave a comment
      </textarea>
      {comments.map(comment =>
        <li>
          {comment}
        </li>
      )}
    </div>
  );
};

export TaskComments;