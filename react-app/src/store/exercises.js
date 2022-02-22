
// Action type constants
const READ_EXERCISES = 'exercises/READ_EXERCISES';
const CREATE_EXERCISE = 'exercises/CREATE_EXERCISE';
const UPDATE_EXERCISE = 'exercises/UPDATE_EXERCISE';
const DELETE_EXERCISE = 'exercises/DELETE_EXERCISE';
const READ_USER_EXERCISES = 'exercises/READ_USER_EXERCISES';
const CREATE_MONSTER_EXERCISES = 'exercises/CREATE_MONSTER_EXERCISES';

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

const createMonsterExercises = (exercises) => {
    return {
        type: CREATE_MONSTER_EXERCISES,
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

export const editExercise = (id, formData) => async (dispatch) => {
	const res = await fetch(`/api/exercises/${id}`, {
		method: "PUT",
		body: formData
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
        await response.json();
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
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    }
}

export const generateMonsterExercises = (numExercises) => async (dispatch) => {
    const res = await fetch(`/api/battles/generate_exercises/${numExercises}`);
    const data = await res.json();
    dispatch(createMonsterExercises(data['exercises']));
    return data['exercises'];
}


const initialState = { byId: {}, monsterExercises: {} }

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

        // FOR BATTLE SECTION
        case CREATE_MONSTER_EXERCISES:
            let loadMonsterExercises = {}
            action.exercises.forEach(exercise => loadMonsterExercises[exercise.id] = exercise);
            newState = { ...state, monsterExercises: { ...loadMonsterExercises } };
            return newState;

        default:
            return state;
    }
}
