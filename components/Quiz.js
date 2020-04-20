import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

function CorrectBtn({ onPress }) {
  return (
    <TouchableOpacity style={styles.btnCorrect} onPress={onPress}>
      <Text style={styles.btnText}>Correct</Text>
    </TouchableOpacity>
  );
}

function IncorrectBtn({ onPress }) {
  return (
    <TouchableOpacity style={styles.btnIncorrect} onPress={onPress}>
      <Text style={styles.btnText}>Incorrect</Text>
    </TouchableOpacity>
  );
}

export default class Quiz extends Component {
  submitCorrect = () => {
    alert("Correct");
  };

  submitIncorrect = () => {
    alert("Incorrect");
  };

  handleClickAnswer = () => {
    alert("Show answer");
  };

  render() {
    return (
      <View>
        <Text>1/2</Text>
        <View style={styles.container}>
          <Text style={styles.title}>{decks[1].questions[0].question}</Text>
          <Text style={{ color: "#bc3562" }} onPress={this.handleClickAnswer}>
            Answer
          </Text>
          <CorrectBtn onPress={this.submitCorrect} />
          <IncorrectBtn onPress={this.submitIncorrect} />
          <Text>1 out of 3 correct</Text>
        </View>
      </View>
    );
  }
}

const decks = {
  1: {
    title: "Deck 1",
    quizzes: "3",
    questions: [
      {
        question: "What is a closure?",
        answer:
          "The combination of a function and the lexical environment within which that function was declared.",
      },
    ],
  },
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
    marginBottom: 10,
    marginTop: 40,
  },
  btnCorrect: {
    backgroundColor: "#b4c33f",
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    marginTop: 150,
    justifyContent: "center",
    alignItems: "center",
    BorderRadius: 5,
  },
  btnIncorrect: {
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
