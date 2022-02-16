import TaskItem from './TaskItem';
import classes from './TaskList.module.css';

function TaskList(props) {
    return <ul className={classes.list}>
        {props.tasks.map((task) => (
            <TaskItem
                key={task.taskData.id}
                id={task.taskData.id}
                text={task.taskData.text}
                dateOfCreation={task.taskData.dateOfCreation}
            />
        ))}
    </ul>
}
export default TaskList; 