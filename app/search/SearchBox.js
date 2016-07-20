import React from 'react'

import Search from './Search'
import Passage from '../passage/Passage'

export default function({
  passage,
  searchTerm,
  loading,
  popoverRef,
  searchChange,
  addToHistory,
  doSearch,
  togglePopover,
  formatting,
  removeNote
}) {
  const handleSearch = function(e) {
    e.preventDefault()
    addToHistory(searchTerm)
    doSearch()
  }

  const handleTermChange = function(e) {
    searchChange(e.target.value)
  }

  const handleVerseClick = function(ref) {
    togglePopover(ref)
  }

  const loadingText = loading ? 'Loading...' : ''

  return (
    <div>
      <Search
        doSearch={handleSearch}
        searchTermChange={handleTermChange}
        label="Search for a verse or passage" />
      <div className="col-sm-9">{loadingText}</div>
      <Passage passage={passage}
        popoverRef={popoverRef}
        verseClick={handleVerseClick}
        formatting={formatting}
        removeNote={removeNote} />
    </div>
  )
}

// export default class SearchContainer extends React.Component {
//   state = {
//     searchTerm: '',
//     text: ''
//   }
//
//   handleSearchChange = (e) => {
//     this.props.store.dispatch(actions.updateSearch(e.target.value))
//     // this.setState({
//     //   searchTerm: e.target.value
//     // })
//   }
//
//   handleSearch = (e) => {
//     e.preventDefault()
//     fetch('rest/verses?p='+this.props.store.getState().searchTerm)
//     .then(resp => resp.json())
//     .then(data => this.props.store.dispatch(actions.updateText(data)))
//     // .then(data => (this.setState({
//     //     passage: data
//     // })))
//   }
//
//   render() {
//     const passage = this.props.store.getState().passage
//     return (
//       <div>
//         <Search
//           doSearch={this.handleSearch}
//           searchTermChange={this.handleSearchChange}
//           label="Search for a verse or passage" />
//         <Passage passage={passage} />
//       </div>
//     )
//   }
// }
