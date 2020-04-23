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
  constructor(props) {
    super(props);

    this.state = {
      currentQuestionNo: 0,
      correctAnswers: 0,
      showButtons: true,
      showAnswer: false,
    };
  }

  submitCorrect = () => {
    if (
      this.props.navigation.state.params.deck.questions.length - 1 >
      this.state.currentQuestionNo
    ) {
      this.setState((state) => {
        return {
          currentQuestionNo: state.currentQuestionNo + 1,
          correctAnswers: state.correctAnswers + 1,
        };
      });
    } else {
      this.setState((state) => {
        return {
          correctAnswers: state.correctAnswers + 1,
          showButtons: false,
        };
      });
    }
  };

  submitIncorrect = () => {
    if (
      this.props.navigation.state.params.deck.questions.length - 1 >
      this.state.currentQuestionNo
    ) {
      this.setState((state) => {
        return { currentQuestionNo: state.currentQuestionNo + 1 };
      });
    } else {
      this.setState({
        showButtons: false,
      });
    }
  };

  handleClickAnswer = () => {
    this.setState({
      ...this.state,
      showAnswer: this.state.showAnswer ? false : true,
    });
  };

  render() {
    return (
      <View>
        <Text>
          Question {this.state.currentQuestionNo + 1}/
          {this.props.navigation.state.params.deck.questions.length}
        </Text>

        {this.state.showButtons && (
          <View style={styles.container}>
            <Text style={styles.title}>
              {!this.state.showAnswer
                ? this.props.navigation.state.params.deck.questions[
                    this.state.currentQuestionNo
                  ].question
                : this.props.navigation.state.params.deck.questions[
                    this.state.currentQuestionNo
                  ].answer}
            </Text>
            <Text style={{ color: "#bc3562" }} onPress={this.handleClickAnswer}>
              {this.state.showAnswer ? "Question" : "Answer"}
            </Text>
            <CorrectBtn onPress={this.submitCorrect} />
            <IncorrectBtn onPress={this.submitIncorrect} />
          </View>
        )}

        {(this.state.currentQuestionNo !== 0 || !this.state.showButtons) && (
          <Text>
            {this.state.correctAnswers} out of{" "}
            {this.state.showButtons
              ? this.state.currentQuestionNo
              : this.state.currentQuestionNo + 1}{" "}
            correct
          </Text>
        )}
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
