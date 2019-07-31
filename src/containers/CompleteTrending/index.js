import React, { Component } from "react";
import TrendingList from "components/TrendingList";

class CompleteTrending extends Component {
  render() {
    return <div className="ui container">{<TrendingList length={10} />}</div>;
  }
}

export default CompleteTrending;
