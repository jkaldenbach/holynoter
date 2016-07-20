import React, {PropTypes} from 'react'

const Heading = function(props) {
  return (
    <h3 className="col-sm-9">
      {props.content.children[0].content}
    </h3>
  )
}

Heading.propTypes = {
  content: PropTypes.object
}

export default Heading
