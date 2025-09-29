import './App.css'
import TodoItem from './TodoItem';
import dummyTask from './data/dummyTask';

function App() {

  return (
    <div className="container">
      {dummyTask.map((task) => <TodoItem task={task}/>)}
    </div>
  )
}

export default App
