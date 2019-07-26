import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDetail } from "../actions";
import backup from "./my-backup.png";
class Details extends Component {
  componentDidMount() {
    this.props.fetchDetail(this.props.match.params.id);
  }
  renderList() {
    console.log(this.props.detail);
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
                <h2>{this.props.detail.data.attributes.canonicalTitle}</h2>
                <h4>
                  {this.props.detail.data.attributes.averageRating}% Community
                  Approval
                </h4>
                <h3>{this.props.detail.data.attributes.synopsis}</h3>
              </div>
              <div className="six wide column">
                <h3>DETAILS</h3>
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
    detail: state.detail
  };
};

export default connect(
  mapStateToProps,
  { fetchDetail }
)(Details);
