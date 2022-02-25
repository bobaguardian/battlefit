import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { dateConverter } from "..";

import Log from "../Log";

const DateLogs = ({dateHeader}) => {

    const [showLogs, setShowLogs] = useState(false);
    const logsById = useSelector(state => state.logs.byId);
    const logs = Object.values(logsById).sort((a, b) => {
        if (new Date(a.date) < new Date(b.date)) return 1;
        return -1;
    });

    const toggleShowLogs = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setShowLogs(!showLogs);
    }

    return (
        <div className="logs-inner-container">
            <h3 className={`log-date-heading date-heading-${dateHeader}`}
                onClick={toggleShowLogs}>{dateConverter(dateHeader)}</h3>

            { showLogs ?
                <>
                    {logs.map(({id, user, date, comment, exercise, unit, unit_count, created_at, updated_at}, index) => (
                        <React.Fragment key={`log-div-${index}`}>
                            {date === dateHeader ?
                            <Log key={`log-${index}`} id={id} user={user} date={date}
                                comment={comment} exercise={exercise} unit={unit}
                                unit_count={unit_count} created_at={created_at}
                                updated_at={updated_at} />
                            : null}
                        </React.Fragment>
                    ))}
                </>
            : null}

        </div>
    )
}

export default DateLogs;
