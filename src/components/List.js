import React, { Component } from "react";
import Card from "./Card";

class List extends Component {
  renderList() {
    const { items, length } = this.props;
    if (items !== undefined)
      return items.slice(0, length).map(item => <Card item={item} />);
  }

  render() {
    const { name } = this.props;
    return (
      <>
        <h6 className="header">{name}</h6>
        <div className="five column doubling ui grid clear-margins">
          {this.renderList()}
        </div>
      </>
    );
  }
}

export default List;
