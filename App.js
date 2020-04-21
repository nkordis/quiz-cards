import * as React from "react";
import { StatusBar } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import ListDecks from "./components/ListDecks";
import NewDeck from "./components/NewDeck";

const Tabs = createBottomTabNavigator({
  Home: {
    screen: ListDecks,
  },
  "New Deck": {
    screen: NewDeck,
  },
});

export default function App() {
  return <Tabs />;
}
