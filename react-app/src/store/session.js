// constants
const SET_USER = 'session/SET_USER';
const REMOVE_USER = 'session/REMOVE_USER';
const UPDATE_USER = 'session/UPDATE_USER';

const CREATE_BATTLE = "session/CREATE_BATTLE";
const DELETE_BATTLE_EXERCISE = "session/DELETE_BATTLE_EXERCISE";
const UPDATE_BATTLE_VICTORY = "session/UPDATE_BATTLE_VICTORY";

const setUser = (user) => ({
  type: SET_USER,
  payload: user
});

const removeUser = () => ({
  type: REMOVE_USER,
})

const updateUser = (user) => ({
	type: UPDATE_USER,
	user,
})

const createBattle = (battle) => ({
  type: CREATE_BATTLE,
  battle
})

const deleteBattleExercise = (battle) => ({
  type: DELETE_BATTLE_EXERCISE,
  battle
})

const updateBattleVictory = (battle) => ({
  type: UPDATE_BATTLE_VICTORY,
  battle
})

export const authenticate = () => async (dispatch) => {
  const response = await fetch('/api/auth/', {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }

    dispatch(setUser(data));
  }
}

export const login = (email, password) => async (dispatch) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  });


  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data))
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }

}

export const logout = () => async (dispatch) => {
  const response = await fetch('/api/auth/logout', {
    headers: {
      'Content-Type': 'application/json',
    }
  });

  if (response.ok) {
    dispatch(removeUser());
  }
};


export const signUp = (formData) => async (dispatch) => {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    body: formData,
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data))
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}

export const updateUserImage = (formData, id) => async (dispatch) => {
	const res = await fetch(`/api/users/${id}`, {
		method: "PUT",
		body: formData,
	});
	const data = await res.json();
	if (res.ok) {
		dispatch(updateUser(data));
	} else
		return {
			errors: ["Something went wrong, please try again"],
		};
}

export const generateBattle = () => async (dispatch) => {
  const res = await fetch("/api/battles/", {
    method: "POST"
  });
  const data = await res.json();
  if (res.ok) {
		dispatch(createBattle(data["battle"]));
    return data["battle"];
	} else
		return {
			errors: ["Something went wrong, please try again"],
		};
}

export const removeBattleExercise = (battleId, exerciseId) => async (dispatch) => {
  const res = await fetch(`/api/battles/${battleId}/exercises/${exerciseId}`, {
    method: "DELETE"
  });
  const data = await res.json();
  if (res.ok) {
		dispatch(deleteBattleExercise(data["battle"]));
	} else
		return {
			errors: ["Something went wrong, please try again"],
		};
}

export const setBattleVictory = (battleId) => async (dispatch) => {
  const res = await fetch(`/api/battles/${battleId}`, {
    method: "PUT"
  });
  const data = await res.json();
  if (res.ok) {
		dispatch(updateBattleVictory(data["battle"]));
	} else
		return {
			errors: ["Something went wrong, please try again"],
		};
}

const initialState = { user: null };

export default function reducer(state = initialState, action) {
  let newState = {};
  let indexOfBattle;
  switch (action.type) {
    case SET_USER:
      return { user: action.payload }
    case REMOVE_USER:
      return { user: null }
    case UPDATE_USER:
      return {user: action.user}
    case CREATE_BATTLE:
      return { user: {...state.user, ["battles"]: [...state.user.battles, action.battle]} }

    case DELETE_BATTLE_EXERCISE:
      newState = { user: {...state.user} };
      indexOfBattle = newState.user.battles.find(battle => battle.id === action.battle.id)

      // at the index of the battle to update, replace it with the updated version
      newState.user.battles.splice(indexOfBattle, 1, action.battle)


      return newState;

    case UPDATE_BATTLE_VICTORY:
      newState = { user: {...state.user} };
      indexOfBattle = newState.user.battles.find(battle => battle.id === action.battle.id)

      // at the index of the battle to update, replace it with the updated version
      newState.user.battles[indexOfBattle] = action.battle;
      return newState;

    default:
      return state;
  }
}
