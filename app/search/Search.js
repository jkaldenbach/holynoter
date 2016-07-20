import React, {PropTypes} from 'react'

const Search = function(props) {
  return (
    <div className="panel panel-default col-sm-9">
      <div className="panel-body">
        <form>
          <div className="form-group label-floating">
            <label for="passage-search" className="control-label">
              Search
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="passage-search"
                onChange={props.searchTermChange}/>
              <span className="help-block">{props.label}</span>
              <span className="input-group-btn">
                <button
                  type="submit"
                  className="btn btn-fab btn-fab-mini"
                  onClick={props.doSearch}>
                  <i className="material-icons">search</i>
                </button>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

Search.propTypes = {
  searchTermChange: PropTypes.func.isRequired,
  doSearch: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
}

export default Search
