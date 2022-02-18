import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserLogs } from "../../store/logs";
import Log from "./Log";
import './LogsPage.css';

const LogsPage = () => {
    const dispatch = useDispatch();
    const logsById = useSelector(state => state.logs.byId);
    const logs = Object.values(logsById);

    useEffect(() => {
        dispatch(getUserLogs());
    }, [dispatch])

    return (
        <div className="dash-main-container">
            <h2>Your Logs</h2>
            <div className="logs-container">
                {logs.map(({id, user, date, comment, exercise, unit, unit_count, created_at, updated_at}, index) => (
                    <Log key={`log-${index}`} id={id} user={user} date={date}
                        comment={comment} exercise={exercise} unit={unit}
                        unit_count={unit_count} created_at={created_at}
                        updated_at={updated_at} />
                ))}
            </div>
        </div>
    )
}

export default LogsPage;
