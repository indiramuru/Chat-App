import React, { Component } from 'react';
import '../styles/ChatMessage.css';
import PropTypes from 'prop-types';

class ChatMessage extends Component {
  render() {
    const { message, username, userStyle } = this.props;
    return (
      <div>
        {message.name !== username && <div className="message-owner-name ">{message.name}</div>}
        <div className={`message-body ${userStyle}`}>{message.message}</div>
        {message.name === username && <span className="clear"></span>}
      </div>
    )
  }
}

ChatMessage.propTypes = {
  message: PropTypes.object,
  username: PropTypes.string
}
ChatMessage.defaultProps = {
  message: {},
  username: ''
}

export default ChatMessage;