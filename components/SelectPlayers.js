import React, {useState} from 'react';
import PlayerBox from './PlayerBox';

import {
  View,
  Text,
  StyleSheet,
  Navigation,
  TouchableWithoutFeedback,
} from 'react-native';

const SelectPlayers = ({navigation}) => {
  const nextScreen = playerCount => {
    navigation.navigate('SelectColors', {
      playerCount: playerCount,
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

export default SelectPlayers;
