import './index.css'

const TaskListItem = props => {
  const {taskDetails} = props
  const {taskText, displayText} = taskDetails
  return (
    <li className="task-item">
      <p className="task-name">{taskText}</p>
      <button className="active-button" type="button">
        {displayText}
      </button>
    </li>
  )
}

export default TaskListItem
