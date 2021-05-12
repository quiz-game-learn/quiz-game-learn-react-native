import {Quiz, UPDATE_ACTIVE_QUIZ, UpdateActiveQuizAction} from "../types/quiz";

const initial = require("../mock/initialQuizzes.json") as Quiz[]
const initialQuizState: Quiz = initial[0] as Quiz;

export function activeQuizzReducer(
  state: Quiz = initialQuizState,
  action: UpdateActiveQuizAction,
): Quiz {
  switch (action.type) {
    case UPDATE_ACTIVE_QUIZ: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
}
