import {Lesson, UPDATE_ACTIVE_LESSON, UpdateActiveLessonAction} from "../types/lesson";

const initial = require("../mock/initialLections.json") as Lesson[]
const initialLectionState: Lesson = initial[0]

export function activeLessonReducer(
  state: Lesson = initialLectionState,
  action: UpdateActiveLessonAction,
): Lesson {
  switch (action.type) {
    case UPDATE_ACTIVE_LESSON: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
}
