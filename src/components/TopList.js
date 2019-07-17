import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchTop } from "../actions";
import ReactTooltip from "react-tooltip";

class TopList extends Component {
  componentDidMount() {
    this.props.fetchTop();
  }
  renderList() {
    console.log(this.props.top);
    let length = this.props.length;
    if (this.props.top.data !== undefined)
      return this.props.top.data.slice(0, length).map(item => (
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
  render() {
    return (
      <div>
        <h6 className="header">TOP</h6>

        <div className="five column doubling ui grid clear-margins">
          {this.renderList()}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    top: state.top
  };
};

export default connect(
  mapStateToProps,
  { fetchTop }
)(TopList);
