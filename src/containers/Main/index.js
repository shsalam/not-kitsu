import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  fetchTrending,
  fetchTop,
  fetchUpcoming,
  fetchHighest,
  fetchPopular
} from "actions";
import Search from "components/Search";
import Sidebar from "components/Sidebar";
import List from "components/List";

class Main extends Component {
  async componentDidMount() {
    await this.props.fetchTrending();
    await this.props.fetchTop();
    await this.props.fetchUpcoming();
    await this.props.fetchHighest();
    await this.props.fetchPopular();
  }
  render() {
    return (
      <div className="ui container">
        <div className="ui grid">
          <div className="ui row">
            <div className="twelve wide column">
              <Search length={5} />
              <br />
              <List
                name={"TRENDING"}
                items={this.props.trending.data}
                length={5}
              />
              <Link to={`/anime/trending`}>
                <div className="view-more">view more</div>
              </Link>
              <br />
              <List name={"TOP"} items={this.props.top.data} length={5} />
              <Link to={`/anime/top-anime`}>
                <div className="view-more">view more</div>
              </Link>
              <br />
              <List
                name={"UPCOMING"}
                items={this.props.upcoming.data}
                length={5}
              />
              <Link to={`/anime/top-anime`}>
                <div className="view-more">view more</div>
              </Link>
              <br />
              <List
                name={"HIGHEST"}
                items={this.props.highest.data}
                length={5}
              />
              <Link to={`/anime/top-anime`}>
                <div className="view-more">view more</div>
              </Link>
              <br />
              <List
                name={"POPULAR"}
                items={this.props.popular.data}
                length={5}
              />
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

const mapStateToProps = state => {
  return {
    trending: state.trending,
    top: state.top,
    upcoming: state.upcoming,
    highest: state.highest,
    popular: state.popular
  };
};

export default connect(
  mapStateToProps,
  { fetchTrending, fetchTop, fetchUpcoming, fetchHighest, fetchPopular }
)(Main);
