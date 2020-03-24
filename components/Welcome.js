import React from 'react';

import {View, Text, StyleSheet, Button} from 'react-native';
import NextButton from './NextButton';

const Welcome = ({navigation}) => {
  console.log('welcome');

  const nextScreen = () => {
    navigation.navigate('Select Players');
  };
  return (
    <View style={styles.main}>
      <Text style={styles.title}>Speed Jenga</Text>
      <NextButton nextScreen={nextScreen} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  title: {
    color: 'white',
    fontSize: 40,
    fontWeight: '700',
    fontFamily: 'helvetica',
  },
});

export default Welcome;
