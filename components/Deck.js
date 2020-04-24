import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Deck(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> {props.deckId}</Text>
      <Text>{props.cardsNo} cards</Text>
    </View>
  );
}

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
