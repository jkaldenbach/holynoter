import {connect} from 'react-redux'
import actions from '../notes/actions'

import NoteFormBox from './NoteFormBox'

const mapStateToProps = function(state) {
  return {
    verseRef: state.notes.newNoteRef,
    showNoteForm: state.notes.showNoteForm
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    addNote: (note, verseRef) => {
      dispatch(actions.addNote(note, verseRef))
    },
    toggleNoteForm: () => {
      dispatch(actions.toggleNoteForm())
    }
  }
}

const NoteFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteFormBox)

export default NoteFormContainer
