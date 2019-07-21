import React, { Component } from "react";
import { connect } from "react-redux";
import { filterSearch } from "../actions";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";
class Search extends Component {
  renderList() {
    if (this.props.filter.data !== undefined) {
      return this.props.filter.data.slice(0, 5).map(item => (
        <Link to={`anime/detail/${item.id}`}>
          <div className="category" key={item.id}>
            <div className="name">
              <img
                className="search-image"
                src={item.attributes.posterImage.tiny}
                alt="Card cap"
              />
            </div>
            <div className="results rcell">
              <div className="result">
                <div className="content">
                  <div className="title">{item.attributes.canonicalTitle}</div>
                  <div className="description">{item.attributes.subtype}</div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ));
    }
  }
  render() {
    return (
      <div>
        <h1>EXPLORE ANIME</h1>
        <div className="search-bar" style={{ padding: "0px" }}>
          <div className="ui fluid category search">
            <i
              className="search icon"
              style={{
                position: "absolute",
                left: "10px",
                top: "10px",
                width: "30px"
              }}
            />
            <input
              className="prompt"
              type="text"
              placeholder="What are you searching for?"
              value={this.props.text}
              onChange={e => {
                this.props.filterSearch(e.target.value);
              }}
            />
            <h6>
              Or, browse with the <i>advanced search</i>
            </h6>
            <div className="results transition visible rblock">
              {this.renderList()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    filter: state.filter
  };
};

export default connect(
  mapStateToProps,
  { filterSearch }
)(Search);
