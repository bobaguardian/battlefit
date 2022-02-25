import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getAllMuscles } from '../../store/muscles';
import { getUserLogs } from '../../store/logs';
import SidePanel from './SidePanel';
import ExercisesPage from "../ExercisesPage";
import ExercisesByMuscleGroup from "../ExercisesPage/ExercisesByMuscleGroup";
import LogsPage from '../LogsPage';
import UserExercisesPage from '../UserExercisesPage';
import MonsterDex from '../MonsterDex';
import MonsterDetails from '../MonsterDex/MonsterDetails';
import BattlePage from '../BattlePage';
import Footer from '../Footer';

import "./Dashboard.css";

const Dashboard = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllMuscles());
        dispatch(getUserLogs());
    }, [dispatch])


    return (
        <div>
            <nav className="dash-nav">
                <a className="logo" href="/exercises"><h1>BattleFit</h1></a>
                <div className="nav-links">
                    <NavLink exact to='/exercises' activeClassName="active">Exercises</NavLink>
                    <NavLink exact to='/logs' activeClassName="active">My Logs</NavLink>
                    <NavLink exact to='/battle' activeClassName="active">Battle</NavLink>
                </div>
            </nav>
            <main className="dash-side-main-container">
                <SidePanel />
                <Switch>
                    <Route exact path="/" >
                        <Redirect to="/exercises" />
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
                        <MonsterDex />
                    </Route>
                    <Route path="/monsters/:id">
                        <MonsterDetails />
                    </Route>
                    <Route exact path='/battle'>
                        <BattlePage />
                    </Route>
                </Switch>
            </main>
            <Footer />
        </div>
    )
}

export default Dashboard;
