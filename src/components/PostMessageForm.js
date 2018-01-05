import React, { Component } from 'react';
import '../styles/PostMessageForm.css';
import * as action from  '../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class PostMessageForm extends Component {

  /**
  * @description Call to make the state up to date with new messages added
  * @retrun {object} Updates state with respective values
  */
  sendMessage = (roomId, e) => {
    e.preventDefault();
    this.props.sendMessages(roomId, this.props.name, this.message.value);
    this.message.value = '';
  }

  render() {
    const { roomId } = this.props;
    return (
      <div className="send-message">
        <form onSubmit={(e) => this.sendMessage(roomId, e)}>
          <input
            className="message-input"
            placeholder="Type a message..."
            ref={(input) => this.message = input}/>
          <a
            className="send-link"
            onClick={(e) => this.sendMessage(roomId, e)}>
            Send
          </a>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sendMessages: (roomId, name, message) => dispatch(action.sendMessages(roomId, name, message))
  }
}

PostMessageForm.propTypes = {
  roomId: PropTypes.number,
  name: PropTypes.string
}
PostMessageForm.defaultProps = {
  roomId: null,
  name: ''
}

export default connect(null, mapDispatchToProps)(PostMessageForm);