import React, {PropTypes} from 'react'

import PopoverContainer from './PopoverContainer'
import Note from '../notes/Note'

const Verse = function(props) {
  let popover = null
  if (props.popoverRef === props.content.ref) {
    popover = <PopoverContainer />
  }

  let classes = ['col-sm-9 verse']
  if (props.formatting.highlights.includes(props.content.ref)) {
    classes.push('verse--highlight')
  }
  if (props.formatting.circles.includes(props.content.ref)) {
    classes.push('verse--circle')
  }
  if (props.formatting.underlines.includes(props.content.ref)) {
    classes.push('verse--underline')
  }

  let notes = props.formatting.notes[props.content.ref] || []

  const handleClick = function() {
    props.verseClick(props.content.ref)
  }

  const handleRemoveNote = function(index) {
    props.removeNote(props.content.ref, index)
  }

  return (
    <div>
      <div className={classes.join(' ')} onClick={handleClick}>
        <sup>{props.content.verseNum}</sup>
        {props.content.content}
        {popover}
      </div>
      {notes.map((note, i) => {
        return <Note key={i} note={note} removeNote={handleRemoveNote}/>
      })}
    </div>
  )
}

Verse.propTypes = {
  content: PropTypes.object
}

export default Verse
