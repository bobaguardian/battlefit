
// Action type constants
const READ_EXERCISES = 'exercises/READ_EXERCISES';
const CREATE_EXERCISE = 'exercises/CREATE_EXERCISE';
const UPDATE_EXERCISE = 'exercises/UPDATE_EXERCISE';
const DELETE_EXERCISE = 'exercises/DELETE_EXERCISE';

// Action creators
const readExercises = (exercises) => {
    return {
        type: READ_EXERCISES,
        exercises
    }
}

const createExercise = (exercise) => {
    return {
        type: CREATE_EXERCISE,
        exercise
    }
}

const updateExercise = (exercise) => {
    return {
        type: UPDATE_EXERCISE,
        exercise
    }
}

const deleteExercise = (id) => {
    return {
        type: DELETE_EXERCISE,
        id
    }
}

// Thunk action creators
export const getAllExercises = () => async (dispatch) => {
    const response = await fetch('/api/exercises/');
    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return;
        }
        dispatch(readExercises(data["exercises"]))
    }
}

export const addExercise = (name, muscle_group, description, image) => async (dispatch) => {
    const response = await fetch('/api/exercises/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            muscle_group,
            description,
            image
         })
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(createExercise(data["exercise"]));
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ['An error occurred. Please try again.'];
    }
}

export const editExercise = (id, name, muscle_group, description, image) => async (dispatch) => {
	const res = await fetch(`/api/exercises/${id}`, {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
            name,
            muscle_group,
            description,
            image
        })
	});
	const data = await res.json();
	if (data.errors) {
		return data.errors;
	} else {
		dispatch(updateExercise(data["exercise"]));
	}
};

export const removeExercise = (id) => async (dispatch) => {
    const response = await fetch(`/api/exercises/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    })

    if (response.ok) {
        const data = await response.json();
        dispatch(deleteExercise(id))
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
        case READ_EXERCISES:
            let loadExercises = {}
            action.exercises.forEach(exercise => loadExercises[exercise.id] = exercise);
            newState = { ...state, byId: { ...loadExercises } };
            return newState;

        case CREATE_EXERCISE:
            newState = {
                ...state,
                byId: { ...state.byId, [action.exercise.id]: action.exercise}
            }
            return newState;

        case UPDATE_EXERCISE:
            newState = { ...state };
            newState.byId[action.exercise.id] = action.exercise;
            newState.byId = { ...newState.byId };
            return newState;

        case DELETE_EXERCISE:
            newState = { ...state };
            delete newState.byId[action.id];
            newState.byId = { ...newState.byId };
            return newState;

        default:
            return state;
    }
}
