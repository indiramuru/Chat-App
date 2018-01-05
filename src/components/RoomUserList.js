import React, { Component } from 'react';
import '../styles/UserList.css';
import PropTypes from 'prop-types';

class RoomUserList extends Component {
  render() {
    const { users, username } = this.props;
    return (
      <div className="room-users">
        {users && users.map((user, index, users) => {
          const isHighlight = user === username ? 'highLightUser' : '';
          return (
            <span key={user} className={`header-user ${isHighlight}`}>
              {index === users.length - 1 ? `${user}` : `${user},`}
            </span>
          )
        })}
      </div>
    )
  }
}

RoomUserList.propTypes = {
  users: PropTypes.array,
  username: PropTypes.string
}
RoomUserList.defaultProps = {
  users: [],
  username: ''
}
export default RoomUserList;