import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Deck(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{decks[props.deckId].title}</Text>
      <Text>{decks[props.deckId].quizzes + " cards"}</Text>
    </View>
  );
}

const decks = {
  1: { title: "Deck 1", quizzes: "3" },
  2: { title: "Deck 2", quizzes: "5" },
  3: { title: "Deck 3", quizzes: "4" },
};

var styles = StyleSheet.create({
  container: {
    height: 50,
    width: 100,
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#c1c1c1",
    textAlign: "center",
  },
  title: {
    fontSize: 19,
    fontWeight: "bold",
  },
});
