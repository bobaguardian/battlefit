
const READ_MONSTERS = 'monsters/READ_MONSTERS';

// Action creators
const readMonsters = (monsters) => {
    return {
        type: READ_MONSTERS,
        monsters
    }
}

export const getAllMonsters = () => async (dispatch) => {
    const response = await fetch(`/api/monsters`);
    if (response.ok) {
        const data = await response.json();
        dispatch(readMonsters(data["monsters"]))
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
        case READ_MONSTERS:
            let loadMonsters = {}
            action.monsters.forEach(monster => loadMonsters[monster.id] = monster);
            newState = { ...state, byId: { ...loadMonsters } };
            return newState;

        default:
            return state;
    }

}
