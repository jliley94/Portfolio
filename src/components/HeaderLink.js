import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class HeaderLink extends Component {
  
    render() {
      return (
        <div className="header-link">
          <a
            href={this.props.link}
            target="_blank" 
            rel="noopener noreferrer" >
            <FontAwesomeIcon icon={this.props.icon} />
          </a>
        </div>
      );
    }
  }