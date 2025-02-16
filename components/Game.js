import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Player from './Player';
import PreStart from './PreStart';

const Game = ({route, navigation}) => {
  const [playerArray, setPlayerArray] = useState(route.params.playerArray);

  const [game, setGame] = useState({
    start: false,
    currentPlayerIndex: 0,
    currentRound: 1,
    totalTurns: 0,
    blockOn: true,
  });

  const updatePlayerDuration = currentTime => {
    const newPlayerArray = playerArray.map(player => {
      if (player.number == game.currentPlayerIndex + 1) {
        return {...player, duration: currentTime};
      } else {
        return player;
      }
    });
    setPlayerArray(newPlayerArray);
  };

  const nextPlayer = () => {
    console.log(playerArray);
    setGame({
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

  const startGame = () => {
    setGame({...game, start: true});
  };

  return (
    <View style={styles.container}>
      {!game.start ? (
        <PreStart playerArray={playerArray} startGame={() => startGame} />
      ) : (
        playerArray.map((player, i) => {
          return (
            i == game.currentPlayerIndex && (
              <Player
                playerNumber={player.number}
                color={player.color}
                duration={player.duration}
                blockOn={game.blockOn}
                nextPlayer={nextPlayer}
                updatePlayerDuration={updatePlayerDuration}
                gameStart={game.start}
                key={i}
              />
            )
          );
        })
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Game;
