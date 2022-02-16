import { useRef } from 'react';
import classes from './NewTaskForm.module.css';
import Card from '../ui/Card';

function NewTaskForm(props) {
    const titleInoutRef = useRef();

    function submitHandler(event) {
        event.preventDefault();
        const enteredTitle = titleInoutRef.current.value;
        const currentDate = (new Date().toJSON()).substring(0, 10);
        const taskData = {
            text: enteredTitle,
            dateOfCreation: currentDate,
            id: props.taskId
        }
        props.onAddNewTask(taskData)
    }
    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <label htmlFor='title'>Task title</label>
                <input type='text' required id='title' ref={titleInoutRef} />
                <button>Add Task</button>
            </form>
        </Card>
    )
}
export default NewTaskForm;
