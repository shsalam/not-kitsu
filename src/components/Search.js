import React, { Component } from "react";
import { connect } from "react-redux";
import { filterSearch } from "../actions";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";
class Search extends Component {
  render() {
    return (
      <div>
        <div className="ui search">
          <input
            className="prompt"
            type="text"
            placeholder="search"
            value={this.props.text}
            onChange={e => {
              this.props.filterSearch(e.target.value);
            }}
          />
          <div className="results" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    text: state.text,
    items: state.items
  };
};

export default connect(
  mapStateToProps,
  { filterSearch }
)(Search);
