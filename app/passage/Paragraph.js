import React, {PropTypes} from 'react'

import Verse from './Verse'

const Paragraph = function(props) {
  //TODO: figure out why this doesn't always work
  const verses = props.content.children.reduce((verses, item) => {
    let newVerses;
    if (item.tagName === 'sup') {
      newVerses = [...verses, {
        ref: item.attributes.id,
        verseNum: item.children[0].content,
        content: ''
      }]
    } else if (item.type === 'Text') {
      newVerses = [
        ...verses.slice(0, -1),
        {
          ...verses.slice(-1).reduce((p, c) => c, {}),
          content: item.content
        }
      ]
      // verses[verses.length-1].content = item.content
    }
    return newVerses
  }, [])
  return (
    <div>
      {verses.map((verse, key) => {
        return <Verse content={verse}
          popoverRef={props.popoverRef}
          verseClick={props.verseClick}
          formatting={props.formatting}
          removeNote={props.removeNote}
          key={key} />
      })}
    </div>
  )
}

Paragraph.propTypes = {
  content: PropTypes.object
}

export default Paragraph
