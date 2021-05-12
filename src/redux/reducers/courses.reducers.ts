import {Course, UPDATE_COURSES, UpdateCoursesAction} from "../types/Course";

const initialCourseState: Course[] = []

export function coursesReducer(
  state: Course[] = initialCourseState,
  action: UpdateCoursesAction,
): Course[] {
  switch (action.type) {
    case UPDATE_COURSES: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
}
