import TodoItem from "./TodoItem";
import dummyTask from "./data/dummyTask";

function TodoList() {
   return (
     <ul>
        {dummyTask.map((task) => <TodoItem  key={task.id} task={task}/>)}
     </ul>
   )
}

export default TodoList;