import {combineReducers} from 'redux';
import {userReducer} from './user.reducers';
import {activeQuizzReducer} from "./activeQuiz.reducers";
import {configReducer} from "./config.reducers";
import {activeLessonReducer} from "./activeLesson.reducers";
import {lessonsReducer} from "./lections.reducers";
import {progressReducer} from "./progress.reducers";
import {coursesReducer} from "./courses.reducers";

export const rootReducer = combineReducers({
  user: userReducer,
  activeQuiz: activeQuizzReducer,
  courses: coursesReducer,
  config: configReducer,
  activeLection: activeLessonReducer,
  lessons: lessonsReducer,
  progress: progressReducer
});

export type RootState = ReturnType<typeof rootReducer>;
