
// Action type constants
const READ_EXERCISES = 'exercises/READ_EXERCISES';
const CREATE_EXERCISE = 'exercises/CREATE_EXERCISE';
const UPDATE_EXERCISE = 'exercises/UPDATE_EXERCISE';
const DELETE_EXERCISE = 'exercises/DELETE_EXERCISE';
const READ_USER_EXERCISES = 'exercises/READ_USER_EXERCISES';

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

const readUserExercises = (exercises) => {
    return {
        type: READ_USER_EXERCISES,
        exercises
    }
}

// Thunk action creators
export const getAllExercises = (muscle) => async (dispatch) => {
    const response = await fetch(`/api/exercises/${muscle}`);
    if (response.ok) {
        const data = await response.json();
        dispatch(readExercises(data["exercises"]))
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    }
}

export const addExercise = (formData) => async (dispatch) => {
    const response = await fetch('/api/exercises/', {
        method: 'POST',
        body: formData
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


export const getUserExercises = (id) => async (dispatch) => {
    // need to be logged in and the user (for now)
    const response = await fetch(`/api/users/${id}/exercises`);
    if (response.ok) {
        const data = await response.json();
        dispatch(readUserExercises(data["exercises"]));
        console.log(data["exercises"]);
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
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

        case READ_USER_EXERCISES:
            let loadUserExercises = {}
            action.exercises.forEach(exercise => loadUserExercises[exercise.id] = exercise);
            newState = { ...state, byId: { ...loadUserExercises } };
            return newState;

        default:
            return state;
    }
}
