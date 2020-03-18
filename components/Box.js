import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const Box = props => {
  const navigation = useNavigation();

  return (
    <TouchableHighlight
      onPress={() => {
        navigation.navigate('Game', {playerCount: props.children});
      }}
      style={styles.box}>
      <Text style={styles.boxText}>{props.children}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 175,
    height: 300,
    margin: 5,
    backgroundColor: 'orange',
    borderRadius: 10,
  },
  boxText: {
    fontFamily: 'helvetica',
    fontSize: 200,
  },
});

export default Box;
