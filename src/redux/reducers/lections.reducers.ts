import {
  Lesson,
  UPDATE_LESSONS,
  UpdateLectionsAction
} from "../types/lesson";

const initial = require("../mock/initialLections.json") as Lesson[]
const initialLectionState: Lesson[] = []

export function lessonsReducer(
  state: Lesson[] = initialLectionState,
  action: UpdateLectionsAction,
): Lesson[] {
  switch (action.type) {
    case UPDATE_LESSONS: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
}
