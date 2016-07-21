import React, { PropTypes } from 'react'

import Heading from './Heading'
import Paragraph from './Paragraph'
import Verse from './Verse'

export default class Passage extends React.Component {
  render() {
    console.log(this.props.passage);
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
        {/*passage.map((item, key) => {
          if (item.tagName === 'h3') {
            return <Heading content={item} key={key} />
          }
          else if (item.tagName === 'p') {
            return <Paragraph
              content={item}
              popoverRef={popoverRef}
              verseClick={verseClick}
              formatting={formatting}
              removeNote={removeNote}
              key={key} />
          }
        })*/}
      </div>
    )
  }
}

Passage.propTypes = {
  passage: PropTypes.array
}
