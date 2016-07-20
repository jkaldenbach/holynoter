import {types as actionTypes} from './actions'

const initialState = {
  searchTerm: '',
  history: [],
  text: [],
  loading: false,
  popoverRef: ''
}

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.UPDATE_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.term
      }

    case actionTypes.ADD_TO_HISTORY:
      return {
        ...state,
        history: [
          action.term,
          ...state.history
        ]
      }

    case actionTypes.REMOVE_FROM_HISTORY:
      return {
        ...state,
        history: [
          ...state.history.slice(0, action.index),
          ...state.history.slice(action.index +1)
        ]
      }

    case actionTypes.SET_LOADING:
      return {
        ...state,
        loading: action.loading
      }

    case actionTypes.DO_SEARCH:
      return {
        ...state,
        loading: true
      }

    case actionTypes.UPDATE_TEXT:
      return {
        ...state,
        text: action.text
      }

    case actionTypes.TOGGLE_POPOVER:
      return {
        ...state,
        popoverRef: action.verseRef
      }

    default:
      return state
  }
}
