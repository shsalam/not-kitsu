import React, { Component } from "react";
import List from "components/List";

class CompleteTrending extends Component {
  render() {
    return <div className="ui container">{<List length={10} />}</div>;
  }
}

export default CompleteTrending;
