import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css'
function MainNavigation() {
    return <header className={classes.header}>
        <div>
            TO DO LIST
        </div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All Tasks</Link>
                </li>
                <li>
                    <Link to='/new-tasks'>Add New Task</Link>
                </li>
                <li>
                    <Link to='/finished-tasks'>Finsihed</Link>
                </li>
            </ul>
        </nav>
    </header>
}
export default MainNavigation;