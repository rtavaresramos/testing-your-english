import { createStore } from 'redux'

//  Here we have the redux store to keep the global states


const INITIAL_STATE = {
    data:[],
}

function categoriesDone( state = INITIAL_STATE , action ){

    switch(action.type){
        case 'CATEGORY_DONE':
            return {...state , data: [...state.data, action.category , action.allRightQuestions, 
            action.rightEasyQuestions, action.rightMediumQuestions, action.rightHardQuestions,
        action.wrongEasyQuestions, action.wrongMediumQuestions, action.wrongHardQuestions]}

        case 'ANSWERS_DATAILS': 
        return {...state , data: [...state.data, action.category, action.userAnswer,
        action.difficulty, action.rightAnswer, action.localdate, action.result]}
        
        default:
            return state
    }

}

const store = createStore(categoriesDone)

export default store

