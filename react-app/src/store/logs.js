
// Action type constants
const READ_LOGS = 'logs/READ_LOGS';
const CREATE_LOG = 'logs/CREATE_LOG';
const UPDATE_LOG = 'logs/UPDATE_LOG';
const DELETE_LOG = 'logs/DELETE_LOG';


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

const updateLog = (log) => {
    return {
        type: UPDATE_LOG,
        log
    }
}

const deleteLog = (id) => {
    return {
        type: DELETE_LOG,
        id
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

export const editLog = (id, date, unit_id, unit_count, comment) => async (dispatch) => {
    const response = await fetch(`/api/logs/${id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            date,
            unit_id,
            unit_count,
            comment
        })
    })

    if (response.ok) {
        const data = await response.json();
        dispatch(updateLog(data["log"]));
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ['An error occurred. Please try again.'];
    }
}


export const removeLog = (id) => async (dispatch) => {
    const response = await fetch(`/api/logs/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(deleteLog(id))
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ['An error occurred. Please try again.']
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
                byId: { [action.log.id]: action.log, ...state.byId}
            }
            return newState;


        case UPDATE_LOG:
            newState = { ...state };
            newState.byId[action.log.id] = action.log;
            newState.byId = { ...newState.byId };
            return newState;

        case DELETE_LOG:
            newState = { ...state };
            delete newState.byId[action.id];
            newState.byId = { ...newState.byId };
            return newState;

        default:
            return state;
    }

}
