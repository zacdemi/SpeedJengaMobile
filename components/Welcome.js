import React from 'react';

import {View, Text, StyleSheet, Button} from 'react-native';

const Welcome = ({navigation}) => {
  console.log('welcome');
  return (
    <View style={styles.main}>
      <Text style={styles.title}>Speed Jenga</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Next"
          color="white"
          onPress={() => {
            navigation.navigate('SelectPlayerCount');
          }}
        />
      </View>
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
  buttonContainer: {
    margin: 20,
    width: 100,
    backgroundColor: 'orange',
    borderRadius: 10,
  },
});

export default Welcome;
