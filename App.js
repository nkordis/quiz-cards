import React, { Component } from "react";
import {
  HeaderBackButton,
  createBottomTabNavigator,
  createStackNavigator,
} from "react-navigation";
import ListDecks from "./components/ListDecks";
import NewDeck from "./components/NewDeck";
import DeckPage from "./components/DeckPage";
import NewQuiz from "./components/NewQuiz";
import Quiz from "./components/Quiz";
import { loadDBData } from "./utils/api";

const Tabs = createBottomTabNavigator(
  {
    Home: {
      screen: ListDecks,
      navigationOptions: {
        tabBarLabel: "Home",
        title: "Decks",
      },
    },
    NewDeck: {
      screen: NewDeck,
      navigationOptions: {
        tabBarLabel: "New Deck",
      },
    },
  },
  {
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: "#1abc9c",
    },
  }
);

const Stack = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      headerTintColor: "#F0FFFF",
      headerStyle: {
        backgroundColor: "#EE82EE",
      },
      title: "Decks",
    },
  },
  DeckPage: {
    screen: DeckPage,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: "#F0FFFF",
      headerStyle: {
        backgroundColor: "#EE82EE",
      },
      headerLeft: (
        <HeaderBackButton
          onPress={() => {
            navigation.navigate("Home");
          }}
        />
      ),
    }),
  },
  NewQuiz: {
    screen: NewQuiz,
    navigationOptions: {
      headerTintColor: "#F0FFFF",
      headerStyle: {
        backgroundColor: "#EE82EE",
      },
      title: "New question",
    },
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerTintColor: "#F0FFFF",
      headerStyle: {
        backgroundColor: "#EE82EE",
      },
      title: "Quiz",
    },
  },
});

export default class App extends Component {
  state = loadDBData(); /*{
    React: {
      title: "React",
      questions: [
        {
          question: "What is React?",
          answer: "A library for managing user interfaces",
        },
        {
          question: "Where do you make Ajax requests in React?",
          answer: "The componentDidMount lifecycle event",
        },
      ],
    },
    JavaScript: {
      title: "JavaScript",
      questions: [
        {
          question: "What is a closure?",
          answer:
            "The combination of a function and the lexical environment within which that function was declared.",
        },
      ],
    },
  };*/

  handler = (newDeckName) => {
    this.setState({
      ...this.state,
      [newDeckName]: { title: newDeckName, questions: [] },
    });
  };

  quizHandler = (newQuestionName, newAnswerName, deckName) => {
    this.setState({
      ...this.state,
      [deckName]: {
        title: this.state[deckName].title,
        questions: this.state[deckName].questions.concat([
          { question: newQuestionName, answer: newAnswerName },
        ]),
      },
    });
  };

  render() {
    return (
      <Stack
        screenProps={{
          handleChange: this.handler,
          handleQuizChange: this.quizHandler,
          mainState: this.state,
        }}
      />
    );
  }
}
