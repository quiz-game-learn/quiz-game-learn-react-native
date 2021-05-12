import AsyncStorage from "@react-native-community/async-storage";
import {LessonResults, QuizResults} from "../redux/types/quizResults";

const QUIZRESULTS_COLLECTION = "quiz_results"
const LESSONRESULTS_COLLECTION = "lesson_results"

export const getQuizResultDb = async (quizzId: string): Promise<QuizResults | null> => {
    try {
        const solutionStr = await AsyncStorage.getItem(generateIdQuizResult(quizzId))
        if (solutionStr) {
            const quizSol = JSON.parse(solutionStr as string) as QuizResults
            return quizSol
        }
        return null
    } catch (e) {
        return null
    }
}

export const generateIdQuizResult = (quizzId: string): string => {
    return QUIZRESULTS_COLLECTION + "_" + quizzId
}

export const saveQuizResultDb = async (results: QuizResults) => {
    try {
        const id = generateIdQuizResult(results.quizId)
        results.id = id
        await AsyncStorage.setItem(id, JSON.stringify(results));
    } catch (e) {
        console.log(e)
        throw e
    }
}

export const getLessonResultDb = async (lessonId: string): Promise<LessonResults | null> => {
    try {
        const solutionStr = await AsyncStorage.getItem(generateIdLessonResult(lessonId))
        if (solutionStr) {
            const lessonSol = JSON.parse(solutionStr as string) as LessonResults
            return lessonSol
        }
        return null
    } catch (e) {
        return null
    }
}

export const generateIdLessonResult = (lessonId: string): string => {
    return LESSONRESULTS_COLLECTION + "_" + lessonId
}

export const saveLessonResultDb = async (results: LessonResults) => {
    try {
        const id = generateIdLessonResult(results.lessonId)
        results.id = id
        await AsyncStorage.setItem(id, JSON.stringify(results));
    } catch (e) {
        console.log(e)
        throw e
    }
}

