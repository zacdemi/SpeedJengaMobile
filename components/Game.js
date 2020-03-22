import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Player from './Player';

const Game = ({route, navigation}) => {
  const [playerArray, setPlayerArray] = useState(route.params.playerArray);

  const [game, setGame] = useState({
    currentPlayerIndex: 0,
    currentRound: 1,
    totalTurns: 0,
    blockOn: true,
  });

  const updatePlayer = duration => {};

  const nextPlayer = () => {
    setGameData({
      ...game,
      currentPlayerIndex: incrementPlayerIndex(game.currentPlayerIndex),
    });
  };

  const incrementPlayerIndex = n => {
    if (n + 1 == playerArray.length) {
      return 0;
    } else {
      return n + 1;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Player
          playerNumber={playerArray[game.currentPlayerIndex].number}
          color={playerArray[game.currentPlayerIndex].color}
          totalDuration={playerArray[game.currentPlayerIndex].duration}
          blockOn={game.blockOn}
          nextPlayer={nextPlayer}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default Game;
