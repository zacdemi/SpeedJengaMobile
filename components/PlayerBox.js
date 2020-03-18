import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';

const PlayerBox = props => {
  return (
    <TouchableHighlight
      onPress={() => props.nextScreen(props.children)}
      style={styles.box}>
      <Text style={styles.boxText}>{props.children}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    backgroundColor: 'orange',
    borderRadius: 10,
  },
  boxText: {
    fontFamily: 'helvetica',
    fontSize: 175,
  },
});

export default PlayerBox;
