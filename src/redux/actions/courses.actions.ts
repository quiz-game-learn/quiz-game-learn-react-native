import {ActionCreator} from 'redux';
import {
  Lesson,
  UPDATE_ACTIVE_LESSON,
  UPDATE_LESSONS,
  UpdateActiveLessonAction,
  UpdateLectionsAction
} from "../types/lesson";
import {getLessonStateDb} from "../../services/lessonsLocalDbService";
import {Course, UPDATE_COURSES, UpdateCoursesAction} from "../types/Course";
import {getCoursesStateDb} from "../../services/coursesLocalDbService";
import {getCoursesAvailable} from "../../services/dbFirestoreService";

export const updateStoredCourses: ActionCreator<UpdateCoursesAction> = (courses: Course[]) => {
  return {type: UPDATE_COURSES, payload: courses};
};



export const fetchCoursesData = async  (dispatch:any, getState:any) => {
  let courses: Course[]
  try {
    courses = await getCoursesAvailable(1000, 0)
  } catch (e) {
    console.log(e)
    courses = await getCoursesStateDb()
  }
  dispatch({type: UPDATE_COURSES, payload: {activeCourses:courses}})
  const les = getState().courses
  console.log('courses --->', les)
}
