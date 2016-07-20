import React from 'react'

const keyCodes = {
  esc: 27,
  n: 78,
  h: 72,
  c: 67,
  u: 85
}

export default class Popover extends React.Component {
  actions = {
    note: () => {
      this.props.setNewNoteRef(this.props.popoverRef)
      this.props.toggleNoteForm()
    },
    highlight: (e) => {
      this.props.toggleHighlight(this.props.popoverRef)
    },
    circle: (e) => {
      this.props.toggleCircle(this.props.popoverRef)
    },
    underline: (e) => {
      this.props.toggleUnderline(this.props.popoverRef)
    }
  }

  handleKeypress = (e) => {
    if (e.keyCode === keyCodes.esc) this.props.togglePopover('')
    else if (e.keyCode === keyCodes.n) this.doAction('note')
    else if (e.keyCode === keyCodes.h) this.doAction('highlight')
    else if (e.keyCode === keyCodes.c) this.doAction('circle')
    else if (e.keyCode === keyCodes.u) this.doAction('underline')
  }

  handleClick = (e) => {
    e.nativeEvent.stopImmediatePropagation()
    e.stopPropagation()
  }

  handleClickOutside = (e) => {
    this.props.togglePopover('')
  }

  doAction = (action, e) => {
    this.actions[action](e)
    this.props.togglePopover('')
    if (e) e.stopPropagation()
  }

  render() {
    return (
      <div className="popover" onClick={this.handleClick}>
        <i className="popover__icon material-icons"
          onClick={this.doAction.bind(null, 'note')}>
          note_add
        </i>
        <span className="popover__spacer"></span>
        <i className="popover__icon material-icons"
          onClick={this.doAction.bind(null, 'highlight')}>
          highlight
        </i>
        <span className="popover__spacer"></span>
        <i className="popover__icon material-icons"
          onClick={this.doAction.bind(null, 'circle')}>
          format_shapes
        </i>
        <span className="popover__spacer"></span>
        <i className="popover__icon material-icons"
          onClick={this.doAction.bind(null, 'underline')}>
          format_underlined
        </i>
      </div>
    )
  }

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeypress)
    document.addEventListener('click', this.handleClickOutside)
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeypress)
    document.removeEventListener('click', this.handleClickOutside)
  }
}
