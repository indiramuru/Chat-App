import React, { Component } from 'react';
import { connect } from 'react-redux';

class Timer extends Component {
  state = {
    timeElapsed: 0
  }

  /**
  * @description Calculates the difference between the logged in time and the current time
  * @retrun {object} Updates component state with respective difference
  */
  diff = () => {
    try {
      if(this.props.loggedInTime) {
        let diff =(Date.now() - this.props.loggedInTime) / 1000;
        diff /= 60;
        this.setState({timeElapsed: Math.round(diff)});
      }
    } catch (e) {
      console.log(e);
    }
  }

  componentDidMount = () => {
    this.interval = setInterval(this.diff, 10000);
  }

  componentWillUnmount = () => {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="minutes-online">
        Online for {this.state.timeElapsed} {this.state.timeElapsed > 1 ? 'minutes' : 'minute' }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return  {
    loggedInTime: state.loggedInTime
  }
}
export default connect(mapStateToProps)(Timer);