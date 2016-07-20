import React from 'react'

const Note = function({note, i, removeNote}) {
  const handleRemove = function() {
    removeNote(i)
  }

  return (
    <div className="clearfix">
      <div className="panel panel-default col-sm-3 col-xs-12 pull-right">
        <div className="panel-body note">
          <a href="javascript:;" className="note__remove"
            onClick={handleRemove}>
            <i className="material-icons">clear</i>
          </a>
          {note}
        </div>
      </div>
    </div>
  )
}

export default Note
