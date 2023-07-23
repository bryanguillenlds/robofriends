import { SET_SEARCH_FIELD } from './constants';

// Action for setting the search field and sending the payload to the Reducer
export const setSearchField = (text) => {
  // We return the type of action and the payload
  return {
    type: SET_SEARCH_FIELD,
    payload: text
  }
}