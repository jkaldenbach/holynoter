import {connect} from 'react-redux'
import actions from './actions'
import noteActions from '../notes/actions'

import SearchBox from './SearchBox'

const mapStateToProps = function(state) {
  return {
    passage: state.search.text,
    searchTerm: state.search.searchTerm,
    loading: state.search.loading,
    popoverRef: state.search.popoverRef,
    formatting: {
      highlights: state.notes.highlights,
      circles: state.notes.circles,
      underlines: state.notes.underlines,
      notes: state.notes.notesByRef
    }
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    searchChange: (term) => {
      dispatch(actions.updateSearch(term))
    },
    addToHistory: (term) => {
      dispatch(actions.addToHistory(term))
    },
    doSearch: (term) => {
      dispatch(actions.doSearch(term))
    },
    togglePopover: (verseRef) => {
      dispatch(actions.togglePopover(verseRef))
    },
    removeNote: (verseRef, index) => {
      dispatch(noteActions.removeNote(verseRef, index))
    }
  }
}

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox)

export default SearchContainer
