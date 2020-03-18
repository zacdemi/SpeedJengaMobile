import React, {Component} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

const NextButton = props => {
  return (
    <View style={styles.buttonContainer}>
      <Button title="Next" color="white" onPress={props.nextScreen} />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 20,
    width: 100,
    backgroundColor: 'orange',
    borderRadius: 10,
  },
});

export default NextButton;
