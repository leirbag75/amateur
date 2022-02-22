import React from 'react';

class Image extends React.Component {

  render() {
    return <div className="amateur-image-viewer">
      <div className="amateur-image-container">
        <img src={this.props.data.url} className="amateur-image" />
      </div>
      <div className="amateur-image-controls">
        <div>
          <button>Like</button>
          3
          <button>Unlike</button>
        </div>
        <div>
          <form>
            <label for="amateur-add-tag-textbox">Add tag:</label>
            <input type="text" id="amateur-add-tag-textbox" />
          </form>
          Tags
          <div className="amateur-tag-container">
            <span className="amateur-tag">Photo <span>&#x2715;</span></span>
            <span className="amateur-tag">Nature <span>&#x2715;</span></span>
          </div>
        </div>
      </div>
    </div>;
  }

}

export default Image;
