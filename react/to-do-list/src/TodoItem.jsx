function TodoItem({task}) {
    return (
        <li className="bg-gray-200 px-3 rounded-md my-3  list-none" id={task.id}> {task.text}</li>)
}
export default TodoItem;