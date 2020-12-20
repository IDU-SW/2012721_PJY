import logo from './logo.svg';
//import './App.css';
import React, {useState} from 'react';
import {
    SafeAreaView,
    FlatList,
    Image,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    TouchableHighlight,
} from 'react-native';

const games = [
  {
    "id" : 0, "title" : "Monster Huter World",
    "price" : 34900,
    "image": require("./images/MonsterHunter.png")
  },
  {
    "id" : 1, "title" : "Among Us",
    "price" : 5500,
    "image": require("./images/AmongUs.jpg")
  },
  {
    "id" : 2, "title" : "영원회귀: 블랙서바이벌",
    "price" : "FREE",
    "image": require("./images/BlackSurvival.jpg")
  },
  {
    "id" : 3, "title" : "Counter-Striker: Global offensive",
    "price" : "FREE",
    "image": require("./images/CSGO.png")
  },
  {
    "id" : 4, "title" : "Team Fortress 2",
    "price" : "FREE",
    "image": require("./images/TF2.jpg")
  },
  {
    "id" : 5, "title" : "DJMAX RESPECT V",
    "price" : 49800,
    "image": require("./images/DJMAX.jpg")
  }
]

const GameCell = ({game}) => (
  <View style={{ height: 80, flexDirection: 'row', marginVertical: 4 }}>
      <Image
          style={{width: 80, height: 80, resizeMode: 'cover'}}
          source={game.image} />
      <View 
          style={{flexDirection: 'column', marginLeft: 12, justifyContent: 'center'}}
      >
          <Text style={{fontSize: 18, marginBottom: 8}}>{game.title} </Text>
          <Text>{game.price} </Text>
      </View>
      
  </View>
)

const GameList = () => (
  <FlatList
      data={games}
      keyExtractor={(item) => `${item.id}`}
      renderItem={({ item, index }) => (
          <GameCell game={item}/>
      )}
  />    
)


const App = () => {
  return (
      <>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView>
              <GameList />
          </SafeAreaView>
      </>
  );
};

export default App;
