
import './App.css';
import Form from './Form.js';
import TaskList from './TaskList';
import Task from './Task.js';

function App() {
  return (
    <div className="container">
      <h1 className="title">Lista de tareas</h1>
      <Form />
      <TaskList />

    </div>
  );
}

export default App;
