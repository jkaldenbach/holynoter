import React from 'react'
import actions from './actions'

const History = function({history, updateSearch, doSearch, deleteItem}) {
  const handleClick = function(term) {
    updateSearch(term)
    doSearch()
  }

  const handleDelete = function(index) {
    deleteItem(index)
  }

  return (
    <div>
      <h3>History</h3>
      <ul className="list-unstyled history">
        {history.map((term, i) => {
          return (
            <li key={i} className="history__item">
              <a href="javascript:;" onClick={handleClick.bind(null, term)}> {term} </a>
              <a href="javascript:;" onClick={handleDelete.bind(null, i)}
                className="history__item-remove">
                <icon className="material-icons md-18">highlight_off</icon>
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default History
