import React, {Component} from 'react';
import {Text, View, TouchableHighlight} from 'react-native';

const Game = ({route, navigation}) => {
  const {playerCount} = route.params;
  return <Text>Let's play with {playerCount} players!</Text>;
};

export default Game;
