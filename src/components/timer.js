import React from 'react';
import { hashHistory } from 'react-router';

class CountdownTimer extends React.Component {

  constructor(props) {
    super(props);
    this.tick = this.tick.bind(this);
    this.state = {
      secondsRemaining: this.props.time,
      isStart: false,
      isOpen: false
    }
  }
 setSeconds (time) {
   this.setState({secondsRemaining: time });
 }

  tick() {
    this.setState({
      secondsRemaining: this.state.secondsRemaining -1
    });
    if (this.state.secondsRemaining <= 0) {
      clearInterval(this.interval);
      document.getElementById('span').innerHTML='Times Up';
      let userTestChoice = window.confirm("want to take the test?");
      if(userTestChoice === true){
      hashHistory.push('/test/'+this.props.wordId);
      }else{
        alert('You can practice here instead');
      }
    }
}

  start() {
    if(!this.state.isStart ){
      this.interval = setInterval(this.tick, 1000);
      this.setState({
        isStart: true
      });
    }
  }


  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (

      <div>
        <button className='btn btn-primary' onClick={this.start.bind(this)} >start</button>
        <span id='span'>
          <input type="button" className='btn btn-default' value={this.state.secondsRemaining} onChange={this.setSeconds.bind(this)}/>
        </span>
      </div>
    );
  }
}

export default CountdownTimer;
