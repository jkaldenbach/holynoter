import fetch from 'isomorphic-fetch'

export const types = {
  UPDATE_SEARCH_TERM: 'UPDATE_SEARCH_TERM',
  ADD_TO_HISTORY: 'ADD_TO_HISTORY',
  REMOVE_FROM_HISTORY: 'REMOVE_FROM_HISTORY',
  UPDATE_TEXT: 'UPDATE_TEXT',
  SET_LOADING: 'SET_LOADING',
  DO_SEARCH: 'DO_SEARCH',
  TOGGLE_POPOVER: 'TOGGLE_POPOVER'
}

var actions = {}

actions.updateSearch = function(term) {
  return {
    type: types.UPDATE_SEARCH_TERM,
    term
  }
}

actions.addToHistory = function(term) {
  return {
    type: types.ADD_TO_HISTORY,
    term
  }
}

actions.removeFromHistory = function(index) {
  return {
    type: types.REMOVE_FROM_HISTORY,
    index
  }
}

actions.setLoading = function(loading) {
  return {
    type: types.SET_LOADING,
    loading
  }
}

actions.doSearch = function() {
  return function(dispatch, getState) {
    dispatch(actions.setLoading(true))
    dispatch(actions.updateText([]))
    return fetch('rest/verses?p=' + getState().search.searchTerm)
    .then(resp => resp.json())
    .then(data => {
      dispatch(actions.setLoading(false))
      dispatch(actions.updateText(data))
    })
  }
}

actions.updateText = function(text) {
  return {
    type: types.UPDATE_TEXT,
    text
  }
}

actions.togglePopover = function(verseRef) {
  console.trace('popover')
  return {
    type: types.TOGGLE_POPOVER,
    verseRef
  }
}

export default actions
