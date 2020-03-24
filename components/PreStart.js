import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Player from './Player';

const PreStart = props => {
  return (
    <>
      <View style={styles.container}>
        {props.playerArray.map((player, i) => {
          return (
            <Player
              playerNumber={player.number}
              color={player.color}
              duration={player.duration}
              key={i}
            />
          );
        })}
      </View>
      <TouchableOpacity style={styles.opacity} onPress={props.startGame()}>
        <Text style={styles.title}>START</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
    opacity: 1,
  },
  opacity: {
    flex: 1,
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    width: '100%',
    height: '100%',
  },
});

export default PreStart;
