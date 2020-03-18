import React, {Component} from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import Player from './Player';

const Game = ({route, navigation}) => {
  return (
    <View>
      <Player totalDuration={90000} />
    </View>
  );
};

export default Game;
