import React, {useState} from 'react';
import ColorBox from './ColorBox';

import {View, Text, StyleSheet} from 'react-native';
import NextButton from './NextButton';

const SelectColors = ({route, navigation}) => {
  const {playerCount} = route.params;
  const [playerArray, setPlayerArray] = useState([]);

  console.log(playerArray);
  const nextScreen = () => {
    console.log('next screen called');
    navigation.navigate('Game', {
      playerArray: playerArray,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Choose a Color</Text>
        {Array.from(Array(Number(playerCount))).map((item, i) => {
          return (
            <ColorBox
              key={i}
              playerArray={playerArray}
              setPlayerArray={setPlayerArray}>
              {i + 1}
            </ColorBox>
          );
        })}
      </View>
      <View style={styles.footer}>
        {playerArray.length == playerCount && (
          <NextButton nextScreen={nextScreen} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 40,
    fontFamily: 'helvetica',
    color: 'white',
    marginBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  content: {
    flex: 6,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'black',
  },
  footer: {
    flex: 1,
    alignItems: 'flex-end',
  },
});

export default SelectColors;
