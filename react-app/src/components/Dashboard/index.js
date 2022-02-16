import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import LogoutButton from "../auth/LogoutButton";


const Dashboard = () => {
    const dispatch = useDispatch()
	const sessionUser = useSelector(state => state.session.user)

    return (
        <div className="dashboard-container">
            <div>
                <h2>Welcome, {sessionUser.username}! </h2>
                <LogoutButton />
            </div>
            <div>
                Dashboard Content
            </div>
        </div>
    )
}

export default Dashboard;
