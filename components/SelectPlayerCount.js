import React, {useState} from 'react';
import PlayerBox from './PlayerBox';

import {
  View,
  Text,
  StyleSheet,
  Navigation,
  TouchableWithoutFeedback,
} from 'react-native';

const SelectPlayerCount = ({navigation}) => {
  /* create array of players based on count selection
  playerArray = [
    {number: 1},
    {number: 2},
  ]*/
  const createPlayerArray = playerCount => {
    const playerArray = [];

    /* add duration from settings. 
       standard time is 2 minutes divided by # of players 
       + 700 miliseconds to visualize starting value */
    const duration = 120000 / playerCount + 700;

    for (var i = 0; i < playerCount; i++) {
      playerArray.push({number: i + 1, duration: duration});
    }
    console.log(playerArray);
    return playerArray;
  };

  const nextScreen = playerCount => {
    navigation.navigate('Select Color', {
      playerArray: createPlayerArray(playerCount),
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>How Many Players?</Text>
      <PlayerBox nextScreen={nextScreen}>2</PlayerBox>
      <PlayerBox nextScreen={nextScreen}>3</PlayerBox>
      <PlayerBox nextScreen={nextScreen}>4</PlayerBox>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 40,
    fontFamily: 'helvetica',
    color: 'white',
    marginBottom: 20,
    marginTop: 20,
  },
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: 'black',
  },
});

export default SelectPlayerCount;
