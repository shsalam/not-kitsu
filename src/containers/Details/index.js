import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDetail, fetchDetailGenre } from "actions";

import { Image } from "components";
import backup from "assets/my-backup.png";
class Details extends Component {
  async componentDidMount() {
    await this.props.fetchDetail(this.props.match.params.id);
    await this.props.fetchDetailGenre(this.props.match.params.id);
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
    // console.log(this.props.detail);
    // console.log(this.props.genre);

    const { data } = this.props.detail;
    if (data !== undefined) {
      return (
        <>
          <div className="user-cover no-edit">
            <Image
              className="cover-photo"
              src={
                data.attributes.coverImage
                  ? data.attributes.coverImage.large
                  : backup
              }
              alt="card-caption"
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
                <Image src={data.attributes.posterImage.medium} />
              </span>
            </div>
          </div>
          <div className="ui grid">
            <div className="ui row">
              <div className="ten wide column">
                <div className="ui row">
                  <h2>{data.attributes.canonicalTitle}</h2>
                </div>
                <div className="ui row">
                  <h5>{data.attributes.averageRating}% Community Approval</h5>
                </div>
                <div className="ui row">
                  <p>{data.attributes.synopsis}</p>
                </div>
                <div className="ui row">{this.renderGenre()}</div>
              </div>
              <div className="six wide column categories">
                <h3 className="header margin-top">Anime Details</h3>
                <div className="ui grid">
                  <div className="sixteen wide mobile eight wide computer column margin-bottom">
                    <div className="ui row">{data.attributes.titles.en}</div>
                    <div className="ui row">{data.attributes.titles.en_jp}</div>
                    <div className="ui row">{data.attributes.titles.ja_jp}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
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
