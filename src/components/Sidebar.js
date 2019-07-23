import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCategories } from "../actions";
import ReactTooltip from "react-tooltip";

class Sidebar extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }
  renderList() {
    console.log(this.props.categories);
    if (this.props.categories.data !== undefined) {
      return this.props.categories.data.map(item => (
        <div
          className="sixteen wide mobile eight wide computer column margin-bottom"
          key={item.id}
        >
          <h5>{item.attributes.title}</h5>
        </div>
      ));
    }
  }
  render() {
    return (
      <div>
        <h3 className="header margin-top">POPULAR CATEGORIES</h3>
        <div className="ui grid">
          <div className="ui row">{this.renderList()}</div>
        </div>
        <br />
        <h6 className="ui right floated button">More Categories..</h6>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  };
};

export default connect(
  mapStateToProps,
  { fetchCategories }
)(Sidebar);
