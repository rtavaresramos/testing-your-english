import { createStore } from 'redux'


const INITIAL_STATE = {
    data:[],
}

function categoriesDone( state = INITIAL_STATE , action ){

    switch(action.type){
        case 'CATEGORY_DONE':
            return {...state , data: [...state.data, action.category , action.allRightQuestions, 
            action.rightEasyQuestions, action.rightMediumQuestions, action.rightHardQuestions,
        action.wrongEasyQuestions, action.wrongMediumQuestions, action.wrongHardQuestions] }
        default:
            return state
    }

}

const store = createStore(categoriesDone)

export default store

