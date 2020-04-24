import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

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
    const { deck } = navigation.state.params;
    return {
      title: navigation.state.params.deck.title,
    };
  };

  render() {
    const deck = this.props.navigation.state.params.deck;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{deck.title}</Text>
        <Text>{deck.questions.length} cards</Text>
        <StartQuizBtn
          onPress={() => this.props.navigation.navigate("Quiz", { deck })}
        />

        <CreateQuizBtn
          onPress={() => this.props.navigation.navigate("NewQuiz", { deck })}
        />
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
