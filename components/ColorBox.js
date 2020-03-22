import React, {useState} from 'react';

import {View, Text, StyleSheet} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const ColorBox = props => {
  const [color, setColor] = useState('white');

  const handleOnPress = () => {
    var randomColor = '#' + Math.floor(Math.random() * 16777216).toString(16);
    setColor(randomColor);

    const playerNumber = props.children;
    props.updateColor(randomColor, playerNumber);
  };

  return (
    <TouchableWithoutFeedback
      onPress={handleOnPress}
      style={[styles.box, {backgroundColor: color}]}>
      <Text style={styles.boxText}>{props.children}</Text>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  boxText: {
    fontFamily: 'helvetica',
    fontSize: 120,
  },
});

export default ColorBox;
