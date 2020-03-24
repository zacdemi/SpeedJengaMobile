import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {Timer} from 'react-native-stopwatch-timer';

const Player = props => {
  const [timer, setTimer] = useState({
    timerStart: false,
    timerReset: false,
    currentTime: props.duration,
  });

  useEffect(() => {
    props.gameStart && setTimer({...timer, timerStart: true});
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
      <Text style={styles.title}>{'Player ' + props.playerNumber}</Text>
      <Timer
        totalDuration={props.duration}
        start={timer.timerStart}
        reset={timer.timerReset}
        options={options}
        getTime={getTime}
      />
      {props.gameStart && (
        <TouchableOpacity onPress={() => handleBlockToggle()}>
          <Text style={styles.blockToggle}>
            {!timer.timerStart ? 'Return Block' : 'Remove Block'}
          </Text>
        </TouchableOpacity>
      )}
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
    color: 'black',
    marginLeft: 7,
  },
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
  blockToggle: {
    fontSize: 30,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'stretch',
    backgroundColor: 'white',
    width: '100%',
  },
});

export default Player;
