
// Action type constants
const READ_LOGS = 'logs/READ_LOGS';
const CREATE_LOG = 'logs/CREATE_LOG';


// Action creators
const readLogs = (logs) => {
    return {
        type: READ_LOGS,
        logs
    }
}

const createLog = (log) => {
    return {
        type: CREATE_LOG,
        log
    }
}


// Thunk action creators
export const getUserLogs = () => async (dispatch) => {
    const response = await fetch('/api/logs/');
    if (response.ok) {
        const data = await response.json();
        dispatch(readLogs(data["logs"]));
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    }
}

export const addLog = (date, exercise_id, unit_id, unit_count, comment) => async (dispatch) => {
    const response = await fetch('/api/logs/', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            date,
            exercise_id,
            unit_id,
            unit_count,
            comment
        })
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(createLog(data["log"]));
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ['An error occurred. Please try again.'];
    }
}

const initialState = { byId: {} }

export default function reducer(state = initialState, action) {
    let newState;
    switch(action.type) {
        case READ_LOGS:
            let loadLogs = {};
            action.logs.forEach(log => loadLogs[log.id] = log);
            newState = { ...state, byId: { ...loadLogs } };
            return newState;

        case CREATE_LOG:
            newState = {
                ...state,
                byId: { ...state.byId, [action.log.id]: action.log}
            }
            return newState;

        default:
            return state;
    }

}
