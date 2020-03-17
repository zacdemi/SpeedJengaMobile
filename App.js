import React from 'react';
import Player from './components/Player';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
       <Text style={styles.title}>Speed Jenga</Text>
       <Player totalDuration={90000}></Player>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  title: {
    color: 'white',
    fontSize: 30,
  }
});

export default App;