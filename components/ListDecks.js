import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { createStackNavigator } from "react-navigation";
import Deck from "./Deck";
import DeckPage from "./DeckPage";

function ListAllDecks({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      {Object.keys(decks).map((deckId) => (
        <TouchableOpacity
          onPress={() => navigation.navigate("DeckPage", { deckId: deckId })}
        >
          <Deck style={styles.box} deckId={deckId} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const Stack = createStackNavigator({
  ListAllDecks: {
    screen: ListAllDecks,
  },
  DeckPage: {
    screen: DeckPage,
    navigationOptions: {
      headerTintColor: "#F0FFFF",
      headerStyle: {
        backgroundColor: "#EE82EE",
      },
    },
  },
});

function ListDecks() {
  return <Stack />;
}

const decks = {
  1: { title: "Deck 1", quizzes: "3" },
  2: { title: "Deck 2", quizzes: "5" },
  3: { title: "Deck 3", quizzes: "4" },
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});

export default ListDecks;
