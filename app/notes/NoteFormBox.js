import React from 'react'
import NoteForm from './NoteForm'

const NoteFormBox = function(props) {
  let form = null
  if (props.showNoteForm) {
    form = <NoteForm {...props} />
  }

  return form;
}

export default NoteFormBox
