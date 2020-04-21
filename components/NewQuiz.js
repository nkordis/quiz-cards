import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default class NewQuiz extends Component {
  state = {
    inputQuestion: "",
    inputAnswer: "",
  };

  handleTextChangeQuestion = (inputQuestion) => {
    this.setState((state) => ({ ...state, inputQuestion }));
  };

  handleTextChangeAnswer = (inputAnswer) => {
    this.setState((state) => ({ ...state, inputAnswer }));
  };

  handleSubmit = () => {
    alert(this.state.inputQuestion + "  \n" + this.state.inputAnswer);
  };

  render() {
    const { inputQuestion, inputAnswer } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Please write write the question</Text>
        <TextInput
          value={inputQuestion}
          placeholder="Enter the question"
          maxLength={100}
          onChangeText={this.handleTextChangeQuestion}
        />
        <Text style={styles.title}>Please write the answer</Text>
        <TextInput
          value={inputAnswer}
          placeholder="Enter the answer"
          maxLength={100}
          onChangeText={this.handleTextChangeAnswer}
        />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => this.props.navigation.navigate("DeckPage")}
        >
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
    marginBottom: 10,
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
