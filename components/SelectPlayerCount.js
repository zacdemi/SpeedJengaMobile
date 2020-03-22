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
  /* create array of players based on count
  playerArray = [
    {number: 1},
    {number: 2},
  ]*/
  const createPlayerArray = playerCount => {
    const playerArray = [];

    for (var i = 0; i < playerCount; i++) {
      playerArray.push({number: i + 1});
    }
    console.log(playerArray);
    return playerArray;
  };

  const nextScreen = playerCount => {
    navigation.navigate('SelectPlayerColor', {
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
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'black',
  },
});

export default SelectPlayerCount;
