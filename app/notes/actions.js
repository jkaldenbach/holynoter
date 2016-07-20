export const types = {
  ADD_NOTE: 'ADD_NOTE',
  REMOVE_NOTE: 'REMOVE_NOTE',
  SET_NEW_NOTE_REF: 'SET_NEW_NOTE_REF',
  TOGGLE_NOTE_FORM: 'TOGGLE_NOTE_FORM',
  TOGGLE_HIGHLIGHT: 'TOGGLE_HIGHLIGHT',
  TOGGLE_CIRCLE: 'TOGGLE_CIRCLE',
  TOGGLE_UNDERLINE: 'TOGGLE_UNDERLINE'
}

var actions = {}

actions.toggleNoteForm = function() {
  return {
    type: types.TOGGLE_NOTE_FORM
  }
}

actions.setNewNoteRef = function(verseRef) {
  return {
    type: types.SET_NEW_NOTE_REF,
    verseRef
  }
}

actions.addNote = function(note, verseRef) {
  return {
    type: types.ADD_NOTE,
    note,
    verseRef
  }
}

actions.removeNote = function(verseRef, index) {
  return {
    type: types.REMOVE_NOTE,
    verseRef,
    index
  }
}

actions.toggleHighlight = function(verseRef) {
  return {
    type: types.TOGGLE_HIGHLIGHT,
    verseRef
  }
}

actions.toggleCircle = function(verseRef) {
  return {
    type: types.TOGGLE_CIRCLE,
    verseRef
  }
}

actions.toggleUnderline = function(verseRef) {
  return {
    type: types.TOGGLE_UNDERLINE,
    verseRef
  }
}

export default actions
