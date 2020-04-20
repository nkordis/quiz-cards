import React, { Component } from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import Deck from "./Deck";

class ListDecks extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        {Object.keys(decks).map((deckId) => (
          <Deck style={styles.box} deckId={deckId} />
        ))}
      </ScrollView>
    );
  }
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
