import {LectionStatus, LessonsProgress, Progress, QuizStatus} from "../redux/types/progress";
import AsyncStorage from "@react-native-community/async-storage";
import {Lesson} from "../redux/types/lesson";
import {Quiz, QuizType} from "../redux/types/quiz";
import {Course} from "../redux/types/Course";

const initial = [] as Course[]
const initialCourseState: Course[] = initial

export const getCoursesStateDb = async (): Promise<Course[]> => {
    console.log("-------------",initialCourseState)
    return await initialCourseState
}
