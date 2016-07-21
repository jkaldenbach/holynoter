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
    return jQuery.ajax({
      url:'https://getbible.net/json',
      dataType: 'jsonp',
      data: 'v=nasb&p=' + getState().search.searchTerm,
      jsonp: 'getbible'
    })
    .then(resp => {
      let book;
      switch (resp.type) {
        case 'chapter':
          book = resp
          break

        case 'verse':
          passage = resp.book[0]

        default:
          throw resp
      }
      return Object.keys(book.chapter).map(verse => ({
        ...book.chapter[verse],
        verseRef: [resp.book_nr, resp.chapter_nr, book.chapter[verse].verse_nr].join('.')
      }))
    })
    .then(passage => {
      dispatch(actions.setLoading(false))
      dispatch(actions.updateText(passage))
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
