import React, { Component } from "react";
import { Link } from "react-router-dom";

class PopupMessage extends Component {
  render() {
    return (
      <div className="modal_message animate__animated animate__slideInDown animate__faster">
        <p>
          Company already created.{" "}
          <Link to="/create/job_listing" onClick={this.props.handleHidePopup}>
            Create job listing instead?
          </Link>
        </p>
        <div className="close" onClick={this.props.handleHidePopup}>
          X
        </div>
      </div>
    );
  }
}

export default PopupMessage;
