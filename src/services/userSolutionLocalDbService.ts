import AsyncStorage from "@react-native-community/async-storage";
import {QuizUserSolution} from "../redux/types/quizUserSolution";

const SOLUTIONS_COLLECTION = "solution"

export const getUserSolutionDb = async (quizzId: string): Promise<QuizUserSolution | null> => {
    try {
        const solutionStr = await AsyncStorage.getItem(generateIdSolutions(quizzId))
        if (solutionStr) {
            const quizSol = JSON.parse(solutionStr as string) as QuizUserSolution
            return quizSol
        }
        return null
    } catch (e) {
        return null
    }
}

const generateIdSolutions = (quizzId: string): string => {
    return SOLUTIONS_COLLECTION + "_" + quizzId
}

export const saveUserSolutionDb = async (solution: QuizUserSolution) => {
    try {
        const id = generateIdSolutions(solution.quizId)
        solution.id = id
        await AsyncStorage.setItem(id, JSON.stringify(solution));
    } catch (e) {
        console.log("----",e)
        throw e
    }
}

export const sendUserSolutionDb = async (solution: QuizUserSolution) => {
    solution.completed = true
    solution.finishedAt = new Date()
    await saveUserSolutionDb(solution)
}
