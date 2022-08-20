import { combineReducers } from 'redux'
const user = (state = null) => state

const cars = (state = [], action) => {
    switch (action.type) {
        case "ADD_CAR" :
            return action.value

        case "REMOVE_CAR" :
            let newState = [...state]
            newState.splice = (action.value, 1)
            return newState
        
        default :
        return state
    }


    // export const anObject = {
    //     type: "ADD_CAR",
    //     value: "Ford"
    //     }
        
        
        
    //     export const removeCar =(index) => {
    //         return {
    //             type: "REMOVE_CAR",
    //             value: "index"
    //         }
        
        







const user = (state = null) => state
// add switch statements in here
    return state
}

export default combineReducers({ user, cars })