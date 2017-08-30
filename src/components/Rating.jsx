import * as React from "react";
import "./Rating.css";
import IconRating from "react-icon-rating";

class Rating extends React.Component {

  setResponse = (response) => {
    this.props.onSelection(response);
  };

  render() {
    const { leftCaption, rightCaption, toggledClass } = this.props;

    return (
        <div className="ratings">
          <div className="caption">{leftCaption}</div>
          <IconRating className="rating-stars" toggledClassName={`fa fa-star fa-3x ${toggledClass}`} untoggledClassName="fa fa-star-o fa-3x text-muted" onChange={this.setResponse} />
          <div className="caption">{rightCaption}</div>
        </div>
    );
  }
}

Rating.defaultProps = {
  leftCaption : "Meh...",
  rightCaption : "Absolutely",
  onSelection : (rating) => {},
  toggledClass : "text-primary",
};

export default Rating;