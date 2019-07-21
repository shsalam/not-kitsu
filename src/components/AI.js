import React, { Component } from "react";
import Search from "./Search";
import SearchList from "./SearchList";
import TrendingList from "./TrendingList";
import TopList from "./TopList";
import UpcomingList from "./UpcomingList";
import HighestList from "./HighestList";
import PopularList from "./PopularList";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
export default class AI extends Component {
  render() {
    return (
      <div className="ui grid">
        <div className="ui row">
          <div className="twelve wide column">
            <Search length={5} />
          </div>
          <div className="four wide column">
            <Sidebar />
          </div>
        </div>
        <div className="ui row">
          <div className="twelve wide column">
            <TrendingList length={5} />
            <Link to={`/anime/trending`}>
              <div className="view-more">view more</div>
            </Link>
          </div>
        </div>
        <div className="ui row">
          <div className="twelve wide column">
            <TopList length={5} />
            <Link to={`/anime/top-anime`}>
              <div className="view-more">view more</div>
            </Link>
          </div>
        </div>
        <div className="ui row">
          <div className="twelve wide column">
            <UpcomingList length={5} />
            <Link to={`/anime/top-anime`}>
              <div className="view-more">view more</div>
            </Link>
          </div>
        </div>
        <div className="ui row">
          <div className="twelve wide column">
            <HighestList length={5} />
            <Link to={`/anime/top-anime`}>
              <div className="view-more">view more</div>
            </Link>
          </div>
        </div>
        <div className="ui row">
          <div className="twelve wide column">
            <PopularList length={5} />
            <Link to={`/anime/top-anime`}>
              <div className="view-more">view more</div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
