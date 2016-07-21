import React, { PropTypes } from 'react'

import Heading from './Heading'
import Verse from './Verse'

export default class Passage extends React.Component {
  render() {
    const passage = this.props.passage || []
    const verseClick = this.props.verseClick
    const popoverRef = this.props.popoverRef
    const formatting = this.props.formatting
    const removeNote = this.props.removeNote
    return (
      <div>
        {passage.map((verse, key) => (
          <Verse content={verse}
            popoverRef={popoverRef}
            verseClick={verseClick}
            formatting={formatting}
            removeNote={removeNote}
            key={key} />
        ))}
      </div>
    )
  }
}

Passage.propTypes = {
  passage: PropTypes.array
}
