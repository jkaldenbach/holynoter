import React from 'react'
import ReactDOM from 'react-dom'

import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import SearchContainer from './search/SearchContainer'
import HistoryContainer from './search/HistoryContainer'
import NoteFormContainer from './notes/NoteFormContainer'
import searchReducer from './search/reducer'
import notesReducer from './notes/reducer'

const reducers = combineReducers({
  search: searchReducer,
  notes: notesReducer
});

const localState = JSON.parse(localStorage.getItem('hn.state') || '{}')

const store = createStore(reducers, localState, compose(
  applyMiddleware(thunkMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

store.subscribe(() => {
  localStorage.setItem('hn.state', JSON.stringify(store.getState()))
})

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Holynoter</h1>
        <div className="row">
          <div className="col-sm-3">
            <HistoryContainer />
          </div>
          <div className="col-sm-9">
            <SearchContainer />
          </div>
          {/*<div className="col-sm-6">
            <h1>Notes will go here</h1>
          </div>*/}
          <NoteFormContainer />
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('holynoter')
)
