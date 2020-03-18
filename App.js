import 'react-native-gesture-handler';
import React from 'react';
import Welcome from './components/Welcome';
import Setup from './components/Setup';
import Game from './components/Game';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {StyleSheet, Button, View, Text, TextInput} from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{title: 'Speed Jenga'}}
        />
        <Stack.Screen name="Setup" component={Setup} />
        <Stack.Screen name="Game" component={Game} />
      </Stack.Navigator>
    </NavigationContainer>
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
  },
});

export default App;

/*
      <View style={styles.container}>
       <Text style={styles.title}>Speed Jenga</Text>
       <Player totalDuration={90000}></Player>
    </View>
*/
