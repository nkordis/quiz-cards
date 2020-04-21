import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { createStackNavigator } from "react-navigation";

function StartQuizBtn({ onPress }) {
  return (
    <TouchableOpacity style={styles.btnStart} onPress={onPress}>
      <Text style={styles.btnText}>Start quiz</Text>
    </TouchableOpacity>
  );
}

function CreateQuizBtn({ onPress }) {
  return (
    <TouchableOpacity style={styles.btnCreate} onPress={onPress}>
      <Text style={styles.btnText}>Add card</Text>
    </TouchableOpacity>
  );
}

export default class DeckPage extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deckId } = navigation.state.params;
    return {
      title: decks[deckId].title,
    };
  };

  render() {
    const deckId = this.props.navigation.state.params.deckId;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{"Deck " + deckId}</Text>
        <Text>{decks[deckId].quizzes} cards</Text>
        <StartQuizBtn onPress={() => this.props.navigation.navigate("Quiz")} />

        <CreateQuizBtn
          onPress={() => this.props.navigation.navigate("NewQuiz")}
        />
      </View>
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
  title: {
    fontSize: 19,
    fontWeight: "bold",
  },
  btnStart: {
    backgroundColor: "#E53224",
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    marginTop: 200,
    justifyContent: "center",
    alignItems: "center",
    BorderRadius: 5,
  },
  btnCreate: {
    backgroundColor: "#E53224",
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
