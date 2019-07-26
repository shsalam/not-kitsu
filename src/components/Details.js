import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDetail } from "../actions";
import { fetchDetailGenre } from "../actions";
import backup from "./my-backup.png";
class Details extends Component {
  componentDidMount() {
    this.props.fetchDetail(this.props.match.params.id);
    this.props.fetchDetailGenre(this.props.match.params.id);
  }
  renderGenre() {
    if (this.props.genre.data !== undefined) {
      return (
        <div className="ui grid">
          <div className="ui row">
            {this.props.genre.data.map(item => (
              <div className="two wide column">{item.attributes.name}</div>
            ))}
          </div>
        </div>
      );
    }
  }
  renderList() {
    console.log(this.props.detail);
    console.log(this.props.genre);
    if (this.props.detail.data !== undefined) {
      return (
        <div>
          <div className="user-cover no-edit">
            <img
              className="cover-photo"
              src={
                this.props.detail.data.attributes.coverImage
                  ? this.props.detail.data.attributes.coverImage.large
                  : backup
              }
              alt="card cap"
            />
            <div className="dark-cover-overlay" />
          </div>
          <div className="ui container">
            <div className="categories">
              <span className="media-poster">
                <a
                  href="#"
                  className="media-favorite "
                  data-ember-action=""
                  data-ember-action-1661="1661"
                >
                  <span class="heart-wrapper" />
                </a>
                <img
                  src={this.props.detail.data.attributes.posterImage.medium}
                />
              </span>
            </div>
          </div>
          <div className="ui grid">
            <div className="ui row">
              <div className="ten wide column">
                <div className="ui row">
                  <h2>{this.props.detail.data.attributes.canonicalTitle}</h2>
                </div>
                <div className="ui row">
                  <h5>
                    {this.props.detail.data.attributes.averageRating}% Community
                    Approval
                  </h5>
                </div>
                <div className="ui row">
                  <p>{this.props.detail.data.attributes.synopsis}</p>
                </div>
                <div className="ui row">{this.renderGenre()}</div>
              </div>
              <div className="six wide column categories">
                <h3 className="header margin-top">Anime Details</h3>
                <div className="ui grid">
                  <div className="sixteen wide mobile eight wide computer column margin-bottom">
                    <div className="ui row">
                      {this.props.detail.data.attributes.titles.en}
                    </div>
                    <div className="ui row">
                      {this.props.detail.data.attributes.titles.en_jp}
                    </div>
                    <div className="ui row">
                      {this.props.detail.data.attributes.titles.ja_jp}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    detail: state.detail,
    genre: state.genre
  };
};

export default connect(
  mapStateToProps,
  { fetchDetail, fetchDetailGenre }
)(Details);
