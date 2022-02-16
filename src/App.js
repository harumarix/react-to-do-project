// import MakeTask from "./components/MakeTask";

import { Route, Switch } from 'react-router-dom';

import AllTasksPage from "./components/pages/AllTasks";
import NewTaskPage from "./components/pages/NewTask";
import FinishedTasksPage from './components/pages/FinishedTasks';
import Layout from './components/layout/Layout';

//app component is the ROOT COMPONEN
function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <AllTasksPage />
        </Route>
        <Route path='/new-tasks'>
          <NewTaskPage />
        </Route>
        <Route path='/finished-tasks'>
          <FinishedTasksPage />
        </Route>
      </Switch>
    </Layout>
  )
}

export default App;
