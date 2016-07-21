import {types as actionTypes} from './actions'

const initialState = {
  noteRefs: [],
  notesByRef: {},
  showNoteForm: false,
  showNoteList: false,
  newNoteRef: '',
  highlights: [],
  circles: [],
  underlines: []
}

export default function notesReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.TOGGLE_NOTE_FORM:
      return {
        ...state,
        showNoteForm: !state.showNoteForm
      }

    case actionTypes.SET_NEW_NOTE_REF:
      return {
        ...state,
        newNoteRef: action.verseRef
      }

    case actionTypes.ADD_NOTE:
      if (state.notesByRef[action.verseRef]) {
        //if a note already exists, push the new note into that verse's list of notes
        return {
          ...state,
          notesByRef: {
            ...state.notesByRef,
            [action.verseRef]: [
              ...state.notesByRef[action.verseRef],
              action.note
            ]
          }
        }

      } else {
        //otherwise add the verse to the refs list and create a new note list for the verse
        return {
          ...state,
          noteRefs: [
            ...state.noteRefs,
            action.verseRef
          ],
          notesByRef: {
            ...state.notesByRef,
            [action.verseRef]: [action.note]
          }
        }

      }

    case actionTypes.REMOVE_NOTE: {
      var updatedNotesByRef = [
        ...state.notesByRef[action.verseRef].slice(0, action.index),
        ...state.notesByRef[action.verseRef].slice(action.index + 1)
      ]
      var updatedNoteRefs = [...state.noteRefs]
      if (!updatedNotesByRef.length) {
        var refIndex = state.noteRefs.indexOf(action.verseRef)
        updatedNoteRefs = [
          ...state.noteRefs.slice(0, refIndex),
          ...state.noteRefs.slice(refIndex + 1)
        ]
      }
      return {
        ...state,
        noteRefs: updatedNoteRefs,
        notesByRef: {
          ...state.notesByRef,
          [action.verseRef]: updatedNotesByRef
        }
      }
    }

    case actionTypes.TOGGLE_HIGHLIGHT:
      var index = state.highlights.indexOf(action.verseRef)
      if (index === -1) {
        return {
          ...state,
          highlights: [
            ...state.highlights,
            action.verseRef
          ]
        }
      } else {
        return {
          ...state,
          highlights: [
            ...state.highlights.slice(0, index),
            ...state.highlights.slice(index + 1)
          ]
        }
      }

    case actionTypes.TOGGLE_CIRCLE:
      var index = state.circles.indexOf(action.verseRef)
      if (index === -1) {
        return {
          ...state,
          circles: [
            ...state.circles,
            action.verseRef
          ]
        }
      } else {
        return {
          ...state,
          circles: [
            ...state.circles.slice(0, index),
            ...state.circles.slice(index + 1)
          ]
        }
      }

    case actionTypes.TOGGLE_UNDERLINE:
      var index = state.underlines.indexOf(action.verseRef)
      if (index === -1) {
        return {
          ...state,
          underlines: [
            ...state.underlines,
            action.verseRef
          ]
        }
      } else {
        return {
          ...state,
          underlines: [
            ...state.underlines.slice(0, index),
            ...state.underlines.slice(index + 1)
          ]
        }
      }

    default:
      return state;
  }
}
