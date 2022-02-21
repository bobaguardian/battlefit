import { NavLink, Switch, Route } from 'react-router-dom';

import SidePanel from './SidePanel';
import ExercisesPage from "../ExercisesPage";
import ExercisesByMuscleGroup from "../ExercisesPage/ExercisesByMuscleGroup";
import UserExercisesPage from '../UserExercisesPage';
import LogsPage from '../LogsPage';
import Footer from '../Footer';

import "./Dashboard.css";

const Dashboard = () => {
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
                    <Route exact path="/monster-dex">
                        <h2>Monster Dex</h2>
                    </Route>
                </Switch>
            </main>
            <Footer />
        </div>
    )
}

export default Dashboard;
