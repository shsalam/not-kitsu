import React, { Component } from "react";
import { Link } from "react-router-dom";

import Search from "components/Search";
import SearchList from "components/SearchList";
import TrendingList from "components/TrendingList";
import TopList from "components/TopList";
import UpcomingList from "components/UpcomingList";
import HighestList from "components/HighestList";
import PopularList from "components/PopularList";
import Sidebar from "components/Sidebar";

class Main extends Component {
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

export default Main;
