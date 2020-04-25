import React, { Component } from "react";
import { View, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import Deck from "./Deck";

export default class ListDecks extends Component {
  handlePressDeck = (deckId) => {
    this.props.navigation.navigate("DeckPage", {
      deck: this.props.screenProps.mainState[deckId],
    });
  };

  render() {
    const animatedStyle = {
      transform: [{ scale: this.animatedValue }],
    };
    return (
      <ScrollView style={styles.container}>
        {Object.keys(this.props.screenProps.mainState).map((deckId) => (
          <TouchableOpacity onPress={() => this.handlePressDeck(deckId)}>
            <Deck
              style={styles.box}
              deckId={deckId}
              cardsNo={
                this.props.screenProps.mainState[deckId].questions.length
              }
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
