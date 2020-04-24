import { AsyncStorage } from "react-native";

const DECK_STORAGE_KEY = "decks";

let testDataDB = {
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
};

export function loadDBData() {
  let ret = "";
  AsyncStorage.getItem(DECK_STORAGE_KEY).then((result) => {
    ret = result;
  });

  if (ret == null) {
    return {};
  } else {
    return ret;
  }
}

export function saveDeckToDB(deck) {
  console.log(
    "deck saved: " +
      JSON.stringify(deck) +
      "  deck name:  " +
      JSON.stringify(deck.title)
  );
  return AsyncStorage.mergeItem(
    DECK_STORAGE_KEY,
    JSON.stringify({
      [deck.title]: deck,
    })
  );
}
