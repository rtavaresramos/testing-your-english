import { createStore } from 'redux'


const INITIAL_STATE = {
    data:[],
}

function categoriesDone( state, action ){

    switch(action.type){
        case 'CATEGORY_DONE':
            return {...state , data: [...state.data, action.category] }
        default:
            return state
    }

}

const store = createStore({})

export default store