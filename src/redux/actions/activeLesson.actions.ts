import {ActionCreator} from 'redux';
import {Lesson, UPDATE_ACTIVE_LESSON, UpdateActiveLessonAction} from "../types/lesson";

export const updateStoredActiveLesson: ActionCreator<UpdateActiveLessonAction> = (lection: Lesson) => {
  return {type: UPDATE_ACTIVE_LESSON, payload: lection};
};
