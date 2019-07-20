import React, { Component } from "react";
import { connect } from "react-redux";
import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";

class SearchList extends Component {
  renderList() {
    if (this.props.upcoming.data !== undefined) {
      return this.props.upcoming.data.slice(0, 5).map(item => (
        <div className="special column" key={item.id}>
          <Link to={`anime/detail/${item.id}`}>
            <div className="poster-overlay">
              <img
                src={item.attributes.posterImage.medium}
                alt="Card cap"
                key={item.id}
                data-tip
                data-for={item.id}
              />
            </div>
          </Link>
          <ReactTooltip id={item.id} className="customeTheme" place={"right"}>
            {item.attributes.canonicalTitle}
            <br />
            <div className="synopsis">{item.attributes.synopsis}</div>
          </ReactTooltip>
        </div>
      ));
    }
  }
  render() {
    return (
      <div>
        <h6 className="header">RESULTS</h6>

        <div className="five column doubling ui grid clear-margins">
          {this.renderList()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.items
  };
}

export default connect(mapStateToProps)(SearchList);
