import React, {useState} from 'react';
import {Text, View, TouchableHighlight, StyleSheet} from 'react-native';
import {Timer} from 'react-native-stopwatch-timer';

const Player = props => {
  const [player, setPlayer] = useState({
    timerStart: false,
    totalDuration: props.totalDuration,
    timerReset: false,
    name: '',
    pauseBlocks: 1,
    outOfGame: false,
    currentTime: props.duration,
  });

  const toggleTimer = () => {
    setPlayer({...player, timerStart: !player.timerStart, timerReset: false});
  };

  const resetTimer = () => {
    setPlayer({...player, timerStart: false, timerReset: true});
  };

  const getFormattedTime = time => {
    setPlayer({...player, currentTime: time});
  };

  return (
    <View style={[styles.container, {backgroundColor: props.color}]}>
      <Timer
        totalDuration={player.totalDuration}
        start={player.timerStart}
        reset={player.timerReset}
        options={options}
        handleFinish={() => handleTimerComplete}
        getTime={() => getFormattedTime}
      />
      <TouchableHighlight onPress={() => toggleTimer}>
        <Text style={{fontSize: 30}}>
          {!player.timerStart ? 'Block On' : 'Block Off'}
        </Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={props.nextPlayer}>
        <Text style={{fontSize: 30}}>Next Player</Text>
      </TouchableHighlight>
      <Text>{player.currentTime}</Text>
    </View>
  );
};

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
