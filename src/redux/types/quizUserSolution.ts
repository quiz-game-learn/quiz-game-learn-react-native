export interface QuizUserSolution {
    id: string,
    quizId: string,
    lessonId: string,
    userAnswers: ChosenAnswer[],
    startedAt: Date,
    finishedAt: Date,
    completed: boolean
}


export interface ChosenAnswer {
    questionIndex:number
    answerType: string,
}

export interface ChosenAnswerMultichoice extends ChosenAnswer{
    selectedOptions: number[]
}
