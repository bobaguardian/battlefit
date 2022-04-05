import { NavLink, Switch, Route, Redirect, Link } from 'react-router-dom';
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
import ExercisesBySearch from '../ExercisesPage/ExercisesBySearch';

import "./Dashboard.css";

const Dashboard = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllMuscles());
        dispatch(getUserLogs());
        const sidePanel = document.querySelector(".side-panel-container");
        const dashMainContainer = document.querySelector(".dash-side-main-container");
        const hamburger = document.querySelector(".side-panel-burger");

        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("change");
            sidePanel.classList.toggle("nav-change");

            if (sidePanel.classList.contains('slidein')) {
                sidePanel.classList.remove('slidein');
                sidePanel.classList.add('slideout');
            } else if (sidePanel.classList.contains('slideout')) {
                sidePanel.classList.remove('slideout');
                sidePanel.classList.add('slidein');
            } else {
                sidePanel.classList.add('slidein');
            }
        })

    }, [dispatch]);


    return (
        <div>
            <nav className="dash-nav">
                <Link to="/exercises"><h1 className="logo">BattleFit</h1></Link>
                <div className="nav-links">
                    <NavLink exact to='/exercises' activeClassName="active">Exercises</NavLink>
                    <NavLink exact to='/logs' activeClassName="active">My Logs</NavLink>
                    <NavLink exact to='/battle' activeClassName="active">Battle</NavLink>
                </div>
            </nav>
            <main className="dash-side-main-container">
                <div className="side-panel-burger" >
                    <span className="bar1"></span>
                    <span className="bar2"></span>
                    <span className="bar3"></span>
                </div>
                <SidePanel />
                <Switch>
                    <Route exact path="/" >
                        <Redirect to="/exercises" />
                    </Route>
                    <Route exact path='/exercises/:muscle'>
                        <ExercisesByMuscleGroup />
                    </Route>
                    <Route exact path='/exercises'>
                        <ExercisesPage />
                    </Route>
                    <Route exact path='/exercises/search/:searchQuery'>
                        <ExercisesBySearch />
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
