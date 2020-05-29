import React from 'react';
import FormData from './form_data';

class Suggestion extends React.Component {

  onClick = () => {
    global.backend.getLink(this.props.data.details, new FormData({}))
  }

  render() {
    return <div className="amateur-suggestion">
        <div className="amateur-thumbnail-container">
          <img
            className="amateur-thumbnail"
            src={this.props.data.preview}
            onClick={this.onClick}
          />
        </div>
        <img
          className="amateur-profile-picture"
          src={this.props.data.uploader.profile_picture}
        />
        <span className="amateur-username">{this.props.data.uploader.name}</span>
      </div>
  }

}

export default Suggestion;
