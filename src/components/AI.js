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
      <div className="ui container">
        <div className="ui grid">
          <div className="ui row">
            <div className="twelve wide column">
              <Search length={5} />
              <TrendingList length={5} />
              <Link to={`/anime/trending`}>
                <div className="view-more">view more</div>
              </Link>
              <br />
              <TopList length={5} />
              <Link to={`/anime/top-anime`}>
                <div className="view-more">view more</div>
              </Link>
              <br />
              <UpcomingList length={5} />
              <Link to={`/anime/top-anime`}>
                <div className="view-more">view more</div>
              </Link>
              <br />
              <HighestList length={5} />
              <Link to={`/anime/top-anime`}>
                <div className="view-more">view more</div>
              </Link>
              <br />
              <PopularList length={5} />
              <Link to={`/anime/top-anime`}>
                <div className="view-more">view more</div>
              </Link>
            </div>
            <div className="four wide column categories">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
