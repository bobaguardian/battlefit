
// Action type constants
const READ_MUSCLE_GROUPS = 'muscles/READ_MUSCLE_GROUPS';

// Action creators
const readMuscles = (muscles) => {
    return {
        type: READ_MUSCLE_GROUPS,
        muscles
    }
}

// Thunk action creators
export const getAllMuscles = () => async (dispatch) => {
    const response = await fetch('/api/muscles/');
    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return;
        }
        dispatch(readMuscles(data["muscles"]))
    }
}


const initialState = { byId: {} }

export default function reducer(state = initialState, action) {
    let newState;
    switch(action.type) {
        case READ_MUSCLE_GROUPS:
            let loadMuscles = {}
            action.muscles.forEach(muscle => loadMuscles[muscle.id] = muscle);
            newState = { ...state, byId: { ...loadMuscles } };
            return newState;
        default:
            return state;
    }
}
