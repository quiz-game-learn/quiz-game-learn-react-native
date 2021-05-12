import {LectionStatus, LessonsProgress, Progress, QuizStatus} from "../redux/types/progress";
import AsyncStorage from "@react-native-community/async-storage";
import {Lesson} from "../redux/types/lesson";
import {Quiz, QuizType} from "../redux/types/quiz";

const initial = require("../redux/mock/initialLections.json") as Lesson[]
const initialLectionState: Lesson[] = initial

export const getLessonStateDb = async (): Promise<Lesson[]> => {
    console.log("-------------",initialLectionState)
    return await initialLectionState
}
