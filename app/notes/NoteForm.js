import React from 'react'

const NoteForm = function({verseRef, showNoteForm, addNote, toggleNoteForm}) {
  let componentState = { noteText: '' };

  const handleClickInside = function(e) {
    e.stopPropagation()
  }

  const handleClickOutside = function(e) {
    toggleNoteForm()
  }

  const handleSubmit = function(e) {
    e.preventDefault()
    addNote(componentState.noteText, verseRef)
    toggleNoteForm()
  }

  const handleChange = function(e) {
    componentState.noteText = e.target.value
  }

  return (
    <div className="note-form__backdrop" onClick={handleClickOutside}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body note-form" onClick={handleClickInside}>
            <form name="newNoteForm" className="note-form__form">
              <div className="form-group">
                <label for="newNote">Note</label>
                <div className="input-group">
                  <textarea name="newNote" className="form-control" cols="3"
                    onChange={handleChange}
                    autoFocus={true}>
                  </textarea>
                  <span className="input-group-btn">
                    <button type="submit" onClick={handleSubmit}
                      className="btn btn-fab btn-fab-mini">
                      <i className="material-icons">note_add</i>
                    </button>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoteForm
/*<div className="note-form__backdrop" onClick={handleClickOutside}>
  <div className="note-form" onClick={handleClickInside}>
    <form name="newNoteForm" className="note-form__form">
      <div className="form-group">
        <label for="newNote">Note</label>
        <div className="input-group">
          <textarea name="newNote" className="form-control" cols="3"
            onChange={handleChange}
            autoFocus={true}>
          </textarea>
          <span className="input-group-btn">
            <button type="submit" onClick={handleSubmit}
              className="btn btn-fab btn-fab-mini">
              <i className="material-icons">note_add</i>
            </button>
          </span>
        </div>
      </div>
    </form>
  </div>
</div>*/
