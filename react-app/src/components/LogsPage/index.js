import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getUserLogs } from "../../store/logs";
import DateLogs from "./DateLogs";
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
    const dates = [...new Set(logs.map(log => log.date))];


    useEffect(() => {
        dispatch(getUserLogs());
    }, [dispatch])


    return (
        <div className="dash-main-container">
            <h2>Your Logs <i className="fa-solid fa-calendar-days"></i></h2>
            { !logs || logs.length === 0 ?
            <div className="empty-message-div">
                <h2> No logs to see yet!</h2>
            </div> : null }
            <div className="logs-container">
                {dates.map((date, index) => (
                    <React.Fragment key={`log-date-${index}`}>
                        <DateLogs dateHeader={date} logs={logs} />
                        </React.Fragment>
                ))}

            </div>
        </div>
    )
}

export default LogsPage;
