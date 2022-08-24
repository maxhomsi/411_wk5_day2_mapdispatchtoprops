

  import { combineReducers } from 'redux'

  const user = (state = null) => state

  const cars = (state = [], action) => {
      switch(action.type) {
          case 'ADD_CAR':
              return [ ...state, action.value ]
          case 'REMOVE_CAR':
              const newState = [ ...state ]
              newState.splice(action.value, 1)
              return newState
          default: 
            return state
      }
  }

  export default combineReducers({ user, cars })






















//   // you know this, import the `combineReducers` tool from Redux
//   import { combineReducers } from 'redux'

//   // same as before, no changes made; just return the state so it can be `map`ped to `props`
//   const user = (state = null) => state

//   // still a reducers, which is just a JS function but with a second parameter now: `action`
//   const cars = (state = [], action) => {
//       // create `switch` statement based on the `type` property
//       switch(action.type) {
//           case 'ADD_CAR':
//               //  if the `type` is `ADD_CAR` then create a new array by spreading (...) `state` into it
//               // then add the `value` that came in with the action object
//               return [ ...state, action.value ]
//           case 'REMOVE_CAR':
//               // if `type` is `REMOVE_CAR` then create a copy of the array by spreading `state` into it
//               const newState = [ ...state ]
//               // then `splice` our the car we want to remove but not directly on `state` instead using the copy we made
//               newState.splice(action.value, 1)
//               // finally, return the copy so it becomes the "new" `state`
//               return newState
//           default: 
//             // if there is no `type` to be evaluated just return `state` as is so it can be used my `mapStateToProps` as normal.
//             return state
//       }
//   }

//   // make these reducers available to the rest of the app with the `combineReducers` tool
//   export default combineReducers({ user, cars })