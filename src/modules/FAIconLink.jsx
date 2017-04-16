import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FAIconLink extends Component {

  static propTypes = {
    icon: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }

  render() {
    return (
      <a href={this.props.url} className="share-dialog">
        <i className={`fa ${this.props.icon}`} />
      </a>
    );
  }
}

export default FAIconLink;