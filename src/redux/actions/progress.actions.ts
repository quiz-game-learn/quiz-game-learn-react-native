import {ActionCreator} from 'redux';
import {
  Lesson,
  UPDATE_ACTIVE_LESSON,
  UPDATE_LESSONS,
  UpdateActiveLessonAction,
  UpdateLectionsAction
} from "../types/lesson";
import {Progress, UPDATE_PROGRESS, UpdateProgressAction} from "../types/progress";
import {getProgressStateDb} from "../../services/progressLocalDbService";

export const updateStoredProgress: ActionCreator<UpdateProgressAction> = (progress: Progress) => {
  return {type: UPDATE_PROGRESS, payload: progress};
};


export const fetchProcessData = (dispatch:any, getState:any) => {
  getProgressStateDb().then(progress => {
    dispatch({type: UPDATE_PROGRESS, payload: progress})
    const prog = getState().progress
    console.log('progress --->', prog)
  })
}
