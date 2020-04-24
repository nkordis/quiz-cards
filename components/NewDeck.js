import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { saveDeckToDB } from "../utils/api";

export default class DeckCreate extends Component {
  state = {
    input: "",
  };

  handleTextChange = (input) => {
    this.setState({ input });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let deckName = this.state.input;
    this.props.screenProps.handleChange(deckName);

    deck = {
      title: deckName,
      questions: [],
    };

    this.props.navigation.navigate("DeckPage", {
      deck,
    });

    saveDeckToDB(deck);
    this.setState({ input: "" });
  };

  render() {
    const { input } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>What is the title of the new deck?</Text>
        <TextInput
          value={input}
          placeholder="Write deck's name"
          maxLength={50}
          onChangeText={this.handleTextChange}
        />
        <TouchableOpacity style={styles.btn} onPress={this.handleSubmit}>
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 100,
    marginTop: 100,
  },

  btn: {
    backgroundColor: "#b4c33f",
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    BorderRadius: 5,
  },
  btnText: {
    color: "#fff",
  },
});
