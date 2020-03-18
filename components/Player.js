import React, {Component} from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import {Timer} from 'react-native-stopwatch-timer';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerStart: false,
      totalDuration: props.totalDuration,
      timerReset: false,
      name: '',
      pauseBlocks: 1,
      outOfGame: false,
    };
    this.toggleTimer = this.toggleTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.getFormattedTime = this.getFormattedTime.bind(this);
  }

  toggleTimer() {
    this.setState({timerStart: !this.state.timerStart, timerReset: false});
  }

  resetTimer() {
    this.setState({timerStart: false, timerReset: true});
  }

  getFormattedTime(time) {
    this.currentTime = time;
  }

  render() {
    return (
      <View>
        <Timer
          totalDuration={this.state.totalDuration}
          msecs
          start={this.state.timerStart}
          reset={this.state.timerReset}
          options={options}
          handleFinish={handleTimerComplete}
          getTime={this.getFormattedTime}
        />
        <TouchableHighlight onPress={this.toggleTimer}>
          <Text style={{fontSize: 30}}>
            {!this.state.timerStart ? 'Start' : 'Stop'}
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.resetTimer}>
          <Text style={{fontSize: 30}}>Reset</Text>
        </TouchableHighlight>
        <Text>{this.currentTime}</Text>
      </View>
    );
  }
}

const handleTimerComplete = () => alert('custom completion function');

const options = {
  container: {
    backgroundColor: '#000',
    padding: 5,
    borderRadius: 5,
    width: 220,
  },
  text: {
    fontSize: 30,
    color: '#FFF',
    marginLeft: 7,
  },
};

export default Player;
