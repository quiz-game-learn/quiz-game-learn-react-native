import {ActionCreator} from 'redux';
import {
  Lesson,
  UPDATE_ACTIVE_LESSON,
  UPDATE_LESSONS,
  UpdateActiveLessonAction,
  UpdateLectionsAction
} from "../types/lesson";
import {getLessonStateDb} from "../../services/lessonsLocalDbService";
import {Course} from "../types/Course";
import {getCoursesAvailable, getLessonsAvailable} from "../../services/dbFirestoreService";
import {getCoursesStateDb} from "../../services/coursesLocalDbService";

export const updateStoredLections: ActionCreator<UpdateLectionsAction> = (lections: Lesson[]) => {
  return {type: UPDATE_LESSONS, payload: {activeLessons: lections}};
};



export const fetchLessonsData = async  (dispatch:any, getState:any) => {
  let lessons: Lesson[]
  try {
    lessons = await getLessonsAvailable(1000, 0)
  } catch (e) {
    console.log(e)
    lessons = await getLessonStateDb()
  }

  dispatch({type: UPDATE_LESSONS, payload: {activeLessons:lessons}})
  const les = getState().lessons
  console.log('lessons --->', les)
}
