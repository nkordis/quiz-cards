import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

function StartQuizBtn({ onPress }) {
  return (
    <TouchableOpacity style={styles.btnStart} onPress={onPress}>
      <Text style={styles.btnText}>Start a Quiz</Text>
    </TouchableOpacity>
  );
}

function CreateQuizBtn({ onPress }) {
  return (
    <TouchableOpacity style={styles.btnCreate} onPress={onPress}>
      <Text style={styles.btnText}>Create new Quiz</Text>
    </TouchableOpacity>
  );
}

export default function DeckPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{decks[1].title}</Text>
      <Text>{decks[1].quizzes} quizzes</Text>

      <StartQuizBtn onPress={this.submit} />
      <CreateQuizBtn onPress={this.submit} />
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
