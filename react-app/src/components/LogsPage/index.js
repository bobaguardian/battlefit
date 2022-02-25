import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getUserLogs } from "../../store/logs";
import Log from "./Log";
import './LogsPage.css';

export const dateConverter = (str) => {
    let theDate = new Date(str);
    theDate.setDate(theDate.getDate() + 1)
    let mnth = ("0" + (theDate.getMonth() + 1)).slice(-2);
    let day = ("0" + theDate.getDate()).slice(-2);
  return [mnth, day, theDate.getFullYear()].join("/");
}

const LogsPage = () => {
    const dispatch = useDispatch();
    const logsById = useSelector(state => state.logs.byId);
    const logs = Object.values(logsById).sort((a, b) => {
        if (new Date(a.date) < new Date(b.date)) return 1;
        return -1;
    });
    let currentDate = "blah";

    useEffect(() => {
        dispatch(getUserLogs());
    }, [dispatch])


    const toggleDateDisplay = (e) => {
        e.preventDefault();
        e.stopPropagation();
        let dateLogs = document.getElementsByClassName(`log-${e.target.id}`)
        for (let i = 0; i < dateLogs.length; i++) {
            if (dateLogs[i].style.opacity === "0") {
                dateLogs[i].style.opacity = "1";
                dateLogs[i].style.height = "150px";
                dateLogs[i].style.overflow = "visible";
                dateLogs[i].style.padding = "30px";
                dateLogs[i].style.borderTop = "1px solid rgba(104, 105, 99, 0.8)";
            } else {
                dateLogs[i].style.opacity = "0";
                dateLogs[i].style.height = "0px";
                dateLogs[i].style.overflow = "hidden";
                dateLogs[i].style.padding = "0px";
                dateLogs[i].style.borderTop = "none";

            }
        }
    }

    return (
        <div className="dash-main-container">
            <h2>Your Logs <i className="fa-solid fa-calendar-days"></i></h2>
            { !logs || logs.length === 0 ?
            <div className="empty-message-div">
                <h2> No logs to see yet!</h2>
            </div> : null }
            <div className="logs-container">


                {logs.map(({id, user, date, comment, exercise, unit, unit_count, created_at, updated_at}, index) => (
                    <div key={`log-${index}`}className="logs-inner-container">
                        {(dateConverter(date) !== currentDate) ?
                            <h3 id={date} className={`log-date-heading date-heading-${date}`} onClick={toggleDateDisplay}>
                                {currentDate = dateConverter(date)}
                            </h3>
                            : null}

                        <Log key={`log-${index}`} id={id} user={user} date={date}
                            comment={comment} exercise={exercise} unit={unit}
                            unit_count={unit_count} created_at={created_at}
                            updated_at={updated_at} />

                    </div>
                ))}

            </div>
        </div>
    )
}

export default LogsPage;
