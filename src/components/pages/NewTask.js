import NewTaskForm from '../tasks/NewTaskForm';
import { useHistory } from 'react-router-dom';
import uniqid from 'uniqid';

function NewTaskPage() {
    const history = useHistory();

    function addTaskHandler(taskData) {
        fetch('http://localhost:3005/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ taskData }),
        }).then(response => response.json())
            .then(data => { console.log(data) })
            .then(() => { history.replace('/') })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    return (
        <section>
            <h1>Add New Task</h1>
            <NewTaskForm taskId={uniqid('task-')} onAddNewTask={addTaskHandler}></NewTaskForm>
        </section>
    )
}
export default NewTaskPage;
