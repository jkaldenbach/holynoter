import {connect} from 'react-redux'
import noteActions from '../notes/actions'
import searchActions from '../search/actions'

import Popover from './Popover'

const mapStateToProps = function(state) {
  return {
    popoverRef: state.search.popoverRef
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    togglePopover: (verseRef) => {
      dispatch(searchActions.togglePopover(verseRef))
    },
    toggleNoteForm: () => {
      dispatch(noteActions.toggleNoteForm())
    },
    setNewNoteRef: (verseRef) => {
      dispatch(noteActions.setNewNoteRef(verseRef))
    },
    toggleHighlight: (verseRef) => {
      dispatch(noteActions.toggleHighlight(verseRef))
    },
    toggleCircle: (verseRef) => {
      dispatch(noteActions.toggleCircle(verseRef))
    },
    toggleUnderline: (verseRef) => {
      dispatch(noteActions.toggleUnderline(verseRef))
    }
  }
}

const PopoverContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Popover)

export default PopoverContainer
