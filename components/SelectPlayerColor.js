import React, {useState} from 'react';
import ColorBox from './ColorBox';

import {View, Text, StyleSheet} from 'react-native';
import NextButton from './NextButton';

const SelectPlayerColor = ({route, navigation}) => {
  /* playerArray = [
    {number: 1},
    {number: 2},
  ]*/
  const [playerArray, setPlayerArray] = useState(route.params.playerArray);

  const updateColor = (color, playerNumber) => {
    const newPlayerArray = playerArray.map(item => {
      if (item.number == playerNumber) {
        // update to {number: 1, color: red}
        return {...item, color: color};
      } else {
        return item;
      }
    });
    setPlayerArray(newPlayerArray);
  };

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
        {Array.from(Array(playerArray.length)).map((item, i) => {
          return (
            <ColorBox key={i} updateColor={updateColor}>
              {i + 1}
            </ColorBox>
          );
        })}
      </View>
      <View style={styles.footer}>
        <NextButton nextScreen={nextScreen} />
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

export default SelectPlayerColor;
