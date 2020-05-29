import React from 'react';
import Suggestion from './suggestion';

class Suggestions extends React.Component {

  render() {
    return <div className="amateur-suggestions">
        {this.props.data.files.map(suggestion =>
          <Suggestion key={suggestion.id} data={suggestion} />
        )}
      </div>
  }

}

export default Suggestions;
