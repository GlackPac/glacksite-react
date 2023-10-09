import React from 'react';

class Clock extends React.Component {
  timerID = 0;

  state = {
    time: new Date().toLocaleTimeString(),
  };

  refresh = () => {
    this.setState({ time: new Date().toLocaleTimeString() });
  };

  render() {
    return (
    <div>
        <p>{this.state.time}</p>
    </div>
    );
  }

  componentDidMount() {
    this.timerID = window.setInterval(this.refresh, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
}

export default Clock