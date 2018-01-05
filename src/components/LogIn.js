import React, { Component } from 'react';
import * as action from  '../actions';
import { connect } from 'react-redux';
import Rooms from './Rooms';
import '../styles/LogIn.css';

class LogIn extends Component {
  state = {
    noName: false,
    showRooms: false
  }

  /**
  * @description If the user name exists, save to state adnd show rooms, else show error
  * @retrun {object} Updates component state with respective values
  */
  openChat = (e) => {
    e.preventDefault();
    if(this.username.value) {
      this.props.saveUserName(this.username.value);
      this.setState((prevState) => ({showRooms: !prevState.showRooms}));
    } else {
      this.setState((prevState) => ({noName: !prevState.noName}));
    }
  }

  render() {
    const { noName, showRooms } = this.state;
    return (
      <div className="parent-container">
        {!showRooms
          ? <div className="log-in-screen">
              <form onSubmit={this.openChat}>
                <input
                  className="username"
                  placeholder="Type your username..."
                  ref={(input) => this.username = input}/>
                  { noName ? <span className='error'>Enter user name</span> : ''}
                  <input
                    type="submit"
                    className="join"
                    value="Join the DoorDash Chat!"/>
              </form>
            </div>
          : <Rooms/>
        }
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    saveUserName: (username) => dispatch(action.saveUserName(username))
  }
}
export default connect(null, mapDispatchToProps)(LogIn);