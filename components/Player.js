import React, {useState, useEffect} from 'react';
import {Text, View, TouchableHighlight, StyleSheet} from 'react-native';
import {Timer} from 'react-native-stopwatch-timer';

const Player = props => {
  const [timer, setTimer] = useState({
    timerStart: false,
    timerReset: false,
    currentTime: props.duration,
  });

  useEffect(() => {
    setTimer({...timer, timerStart: true});
  }, []);

  const toggleTimer = () => {
    setTimer({...timer, timerStart: !timer.timerStart, timerReset: false});
  };

  const resetTimer = () => {
    setTimer({...timer, timerStart: false, timerReset: true});
  };

  const getTime = time => {
    setTimer({...timer, currentTime: time});
  };

  const handleBlockToggle = () => {
    if (timer.timerStart) {
      toggleTimer();
    } else {
      props.updatePlayerDuration(timer.currentTime);
      props.nextPlayer();
      resetTimer();
      toggleTimer();
    }
  };

  return (
    <View style={[styles.container, {backgroundColor: props.color}]}>
      <Text style={{fontSize: 50}}>{'Player ' + props.playerNumber}</Text>
      <Timer
        totalDuration={props.duration}
        start={timer.timerStart}
        reset={timer.timerReset}
        options={options}
        handleFinish={handleTimerComplete}
        getTime={getTime}
      />
      <TouchableHighlight onPress={() => handleBlockToggle()}>
        <Text style={{fontSize: 30}}>
          {!timer.timerStart ? 'Return Block' : 'Remove Block'}
        </Text>
      </TouchableHighlight>
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
