import React, {PropTypes} from 'react'

import PopoverContainer from './PopoverContainer'
import Note from '../notes/Note'

const Verse = function(props) {
  let popover = null
  if (props.popoverRef === props.content.verseRef) {
    popover = <PopoverContainer />
  }

  let classes = ['col-sm-9 verse']
  if (props.formatting.highlights.includes(props.content.verseRef)) {
    classes.push('verse--highlight')
  }
  if (props.formatting.circles.includes(props.content.verseRef)) {
    classes.push('verse--circle')
  }
  if (props.formatting.underlines.includes(props.content.verseRef)) {
    classes.push('verse--underline')
  }

  let notes = props.formatting.notes[props.content.verseRef] || []

  const handleClick = function() {
    props.verseClick(props.content.verseRef)
  }

  const handleRemoveNote = function(index) {
    props.removeNote(props.content.verseRef, index)
  }

  return (
    <div>
      <div className={classes.join(' ')} onClick={handleClick}>
        <sup>{props.content.verse_nr}</sup>
        {props.content.verse}
        {popover}
      </div>
      {notes.map((note, i) => {
        return <Note key={i} index={i} note={note} removeNote={handleRemoveNote}/>
      })}
    </div>
  )
}

Verse.propTypes = {
  content: PropTypes.object
}

export default Verse
