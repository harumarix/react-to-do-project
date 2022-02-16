import TaskList from '../tasks/TaskList';
import React, { useState, useEffect } from 'react';
function AllTasksPage() {
    const [isLoaded, setisLoaded] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3005/tasks')
            .then(response => response.json())
            .then(data => setisLoaded(data))
    }, []);

    return <div>
        <TaskList tasks={isLoaded} />
    </div>

}
export default AllTasksPage;

