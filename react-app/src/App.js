import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { authenticate } from './store/session';
import SplashPage from './components/SplashPage';
import ErrorPage from "./components/ErrorPage";
import Dashboard from './components/Dashboard';
import AboutPage from './components/AboutPage';

const musclePaths = [
  "/exercises/Abs",
  "/exercises/Back",
  "/exercises/Biceps",
  "/exercises/Calves",
  "/exercises/Cardio",
  "/exercises/Chest",
  "/exercises/Forearms",
  "/exercises/Glutes",
  "/exercises/Legs",
  "/exercises/Shoulders",
  "/exercises/Triceps",
  "/exercises/Other"
]

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
	const sessionUser = useSelector((state) => state.session.user);


  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={["/", "/exercises", "/logs", ...musclePaths,
          "/users/:id", "/monster-dex", "/monsters/:id", "/battle"]}>
          { sessionUser ? <Dashboard /> : <SplashPage /> }
        </Route>
        <Route exact path="/meet-the-maker">
          <AboutPage />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
