import {connect} from 'react-redux'
import actions from './actions'

import History from './History'

const mapStateToProps = function(state) {
  return {
    history: state.search.history
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    updateSearch: (term) => {
      dispatch(actions.updateSearch(term))
    },
    doSearch: () => {
      dispatch(actions.doSearch())
    },
    deleteItem: (index) => {
      dispatch(actions.removeFromHistory(index))
    }
  }
}

const HistoryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(History)

export default HistoryContainer
