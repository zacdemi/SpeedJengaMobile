import React, {Component} from 'react';
import {Text, View, TouchableHighlight, StyleSheet} from 'react-native';
import Player from './Player';

const Game = ({route, navigation}) => {
  const {playerArray} = route.params;
  console.log(playerArray);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {playerArray.map((item, i) => {
          return (
            <Player
              name={item.player}
              color={item.color}
              totalDuration={90000}
              key={i}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default Game;
