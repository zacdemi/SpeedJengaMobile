import React, {Component} from 'react';
import {Text, View, TouchableHighlight, StyleSheet} from 'react-native';
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
      <View style={[styles.container, {backgroundColor: this.props.color}]}>
        <Timer
          totalDuration={this.state.totalDuration}
          start={this.state.timerStart}
          reset={this.state.timerReset}
          options={options}
          handleFinish={handleTimerComplete}
          getTime={this.getFormattedTime}
        />
        <TouchableHighlight onPress={this.toggleTimer}>
          <Text style={{fontSize: 30}}>
            {!this.state.timerStart ? 'Block On' : 'Block Off'}
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.nextPlayer}>
          <Text style={{fontSize: 30}}>Next Player</Text>
        </TouchableHighlight>
        <Text>{this.currentTime}</Text>
      </View>
    );
  }
}

const handleTimerComplete = () => alert('custom completion function');

const options = {
  container: {},
  text: {
    textAlign: 'center',
    fontSize: 100,
    fontWeight: '700',
    font: 'helvetica',
    color: 'black',
    marginLeft: 7,
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'stretch',
    backgroundColor: 'white',
    width: '100%',
  },
});

export default Player;
