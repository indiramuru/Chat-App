import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from  '../actions';
import Timer from './Timer';
import '../styles/Rooms.css';
import RoomUserList from './RoomUserList';
import ChatMessage from './ChatMessage';
import PostMessageForm from './PostMessageForm';

class Rooms extends Component {
  componentDidMount = () => {
    if(!this.props.rooms) {
      this.props.fetchRooms();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    var item = document.getElementsByClassName('chat-messages')[0];
    if(item) {
      try {
        item.scrollTop = item.scrollHeight;
      } catch (e) {
        console.log(e);
      }
    }
  }

  /**
  * @description Get data specific to that room
  * @retrun {object} Updates state with respective values
  */
  openRoom = (roomId, e) => {
    e.preventDefault();
    this.props.fetchSelectedRoom(roomId);
  }

  render() {
    const { username, rooms, selectedRoomId } = this.props;
    return (
      <div className="container">
        <div className="left">
          <div className="room-user-detail">
            <div>{username}</div>
            <Timer/>
          </div>
          <div className="room-list">
            {rooms && rooms.map((room, index) => {
              return (
                <a
                  key={room.id}
                  className={"chat-room-name " + ((selectedRoomId && selectedRoomId === room.id) || (!selectedRoomId && index === 0) ? 'highlight' : '')}
                  onClick={(e) => this.openRoom(room.id, e)}
                >
                  {room.name}
                </a>
              )
            })}
          </div>
        </div>
        <div className="right">
          {rooms && rooms.map((room, index) => {
            return ((selectedRoomId === 0 || selectedRoomId !== 0) && index === selectedRoomId)
              ? <div key={`room-${room.id}`}>
                  <div className="header">
                    <div className="room-name">{room.name}</div>
                    <RoomUserList users={room.users} username={username}/>
                  </div>
                  <div className="chat-messages">
                    {room.messages && room.messages.map((message, index, messages) => {
                      const userStyle = message.name === username ? 'set-user-style' : 'set-other-user-style';
                      return (
                        <ChatMessage key={message.id} message={message} userStyle={userStyle} username={username}/>
                      )
                    })}
                    <span className="clear"></span>
                  </div>
                  <PostMessageForm roomId={room.id} name={username}/>
                </div>
              : null
          })}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    username: state.username,
    selectedRoomId: state.selectedRoomId,
    rooms: state.rooms && Object.keys(state.rooms).reduce((arr, roomId) => {
      arr.push(state.rooms[roomId]);
      return arr;
    }, [])
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchRooms: () => dispatch(action.fetchRooms()),
    fetchSelectedRoom: (roomId) => dispatch(action.fetchSpecificRoom(roomId)),
    sendMessages: (roomId, name, message) => dispatch(action.sendMessages(roomId, name, message))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);