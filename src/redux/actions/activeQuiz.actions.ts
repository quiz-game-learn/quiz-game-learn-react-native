import {ActionCreator} from 'redux';
import {Quiz, UPDATE_ACTIVE_QUIZ, UpdateActiveQuizAction} from "../types/quiz";

export const updateStoredActiveQuiz: ActionCreator<UpdateActiveQuizAction> = (user: Quiz) => {
  return {type: UPDATE_ACTIVE_QUIZ, payload: user};
};
