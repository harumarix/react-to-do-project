import Card from '../ui/Card';
import classes from './TaskItem.module.css';

function TaskItem(props) {
    const closeHandler = function (event) {
        let clickedTaskId = event.target.parentElement.parentElement.id;
        document.getElementById(clickedTaskId).remove();
        fetch(`http://localhost:3005/tasks/${clickedTaskId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(response => response.json())
            .then(data => { console.log(data) })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <li id={props.id} className={classes.item}>
            <Card>
                <div>
                    {props.text}

                </div>
                <div>
                    {props.dateOfCreation}
                </div>
                <div>
                    {props.id}
                </div>
                <div className={classes.x} onClick={closeHandler}>x</div>
            </Card>
        </li>
    );
}
export default TaskItem;