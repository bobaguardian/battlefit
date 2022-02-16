import { useEffect } from "react";
import { NavLink, Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

import LogoutButton from "../auth/LogoutButton";
import ExercisesPage from "../ExercisesPage";
import ExercisesByMuscleGroup from "../ExercisesPage/ExercisesByMuscleGroup";


const Dashboard = () => {
    const dispatch = useDispatch()
	const sessionUser = useSelector(state => state.session.user)

    return (
        <div>
            <nav>
                <NavLink to='/exercises'>Exercises</NavLink>
                <NavLink to='/logs'>My Logs</NavLink>
            </nav>
            <div className="user-info">
                <h2>Welcome, {sessionUser.username}! </h2>
                <LogoutButton />
            </div>
            <Switch>
                <Route exact path="/" >
                    <div className="dashboard-container">
                        Dashboard Content
                    </div>
                </Route>
                <Route path='/exercises/:muscle'>
                    <ExercisesByMuscleGroup />
                </Route>
                <Route exact path='/exercises'>
                    <ExercisesPage />
                </Route>
                <Route exact path='/logs'>
                    <h2>My Logs</h2>
                </Route>
            </Switch>
        </div>
    )
}

export default Dashboard;
