import { useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

const ExercisesPage = () => {
    const dispatch = useDispatch()
	const sessionUser = useSelector(state => state.session.user)

    return (
        <div>
           <h2>Exercises</h2>
        </div>
    )
}

export default ExercisesPage;
