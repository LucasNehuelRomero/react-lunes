const Task = props => {
  // props //
  const { text, done } = props.task; // destructuring //
  //  render //
  const style= {
    textDecoration: done ? 'line-through': 'done'
  };

  return (
    <li style={style}>{text}
    <input type="checkbox" />
    <button>X</button>
    </li>
  );
};

export default Task;
