import React, { Component } from "react";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import Deck from "./Deck";

export default class ListDecks extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        {Object.keys(this.props.screenProps.mainState).map((deckId) => (
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate("DeckPage", {
                deck: this.props.screenProps.mainState[deckId],
              })
            }
          >
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
