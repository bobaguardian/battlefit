import { NavLink, Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

import SidePanel from './SidePanel';
import ExercisesPage from "../ExercisesPage";
import ExercisesByMuscleGroup from "../ExercisesPage/ExercisesByMuscleGroup";
import LogsPage from '../LogsPage';
import UserExercisesPage from '../UserExercisesPage';

import "./Dashboard.css";

const Dashboard = () => {
	const sessionUser = useSelector(state => state.session.user)

    return (
        <div>
            <nav className="dash-nav">
                <a className="Logo" href="/"><h1>BattleFit</h1></a>
                <div className="nav-links">
                    <NavLink to='/exercises'>Exercises</NavLink>
                    <NavLink to='/logs'>My Logs</NavLink>
                </div>
            </nav>
            <main className="dash-side-main-container">
                <SidePanel />
                <Switch>
                    <Route exact path="/" >
                        {/* <div className="dashboard-container">
                            Dashboard Content
                        </div> */}
                        <ExercisesPage />
                    </Route>
                    <Route path='/exercises/:muscle'>
                        <ExercisesByMuscleGroup />
                    </Route>
                    <Route exact path='/exercises'>
                        <ExercisesPage />
                    </Route>
                    <Route exact path='/logs'>
                        <LogsPage />
                    </Route>
                    <Route path="/users/:id">
                        <UserExercisesPage />
                    </Route>
                </Switch>
            </main>
        </div>
    )
}

export default Dashboard;
