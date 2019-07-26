import React, { Component } from "react";
import TrendingList from "./TrendingList";

export default class CompleteTrending extends Component {
  render() {
    return (
      <div className="ui container">
        <TrendingList length={10} />
      </div>
    );
  }
}
