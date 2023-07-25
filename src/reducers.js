// Set the initial state, SINGLE SOURCE OF TRUTH.
import {SET_SEARCH_FIELD} from './constants.js';

const initialState = {
  robots: [],
  searchField: ''
}

// Reducer that takes in the state and the action and returns the new state.
// This is a PURE FUNCTION, receives input and will produce a deterministic output
export const searchRobots = (state = initialState, action={}) => {
  // Check the action type and return the new state based on the action type.
  // It is good to use a switch because there could be many different actions that act upon the searchRobots reducer.
  switch (action.type) {
    case SET_SEARCH_FIELD:
      // Return NEW object (because STATE IS READ ONLY) with everything that was in the old state, but update the searchField.
      return {
        ...state,
        searchField: action.payload
      };
    default:
      return state;
  }
}