import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const PlayerBox = props => {
  return (
    <TouchableOpacity
      onPress={() => props.nextScreen(props.children)}
      style={styles.box}>
      <Text style={styles.boxText}>{props.children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    backgroundColor: '#2196f3',
    borderRadius: 10,
  },
  boxText: {
    fontFamily: 'helvetica',
    fontSize: 175,
    color: 'black',
  },
});

export default PlayerBox;
