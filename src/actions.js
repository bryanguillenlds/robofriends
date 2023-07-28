import {
  REQUEST_ROBOTS_PENDING,
  SET_SEARCH_FIELD,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants';

// Action for setting the search field and sending the payload to the Reducer
export const setSearchField = (text) => {
  // We return the type of action and the payload
  return {
    type: SET_SEARCH_FIELD,
    payload: text
  }
}

// Action for requesting the robots from the API and sending to the reducer the appropriate payload and the type of action.
// Higher order function that returns a function with the dispatch. This is because redux-thunk provides the dispatch and is expecting a function returned that uses that dispatch.
export const requestRobots = () => (dispatch) => {
  dispatch({
    type: REQUEST_ROBOTS_PENDING
  });

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => dispatch({
      type: REQUEST_ROBOTS_SUCCESS,
      payload: users
    }))
    .catch(error => dispatch({
      type: REQUEST_ROBOTS_FAILED,
      payload: error
    }))
}