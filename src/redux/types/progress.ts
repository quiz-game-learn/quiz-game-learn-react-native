import {Quiz} from "./quiz";

export interface Progress {
    lessonsProgress: { [lectionId: string]: LessonsProgress },
    points: number,
    userId: string,
    level: number,
    badges: string[],
    lastActive: Date
}

export interface LessonsProgress {
    globalStatus: LectionStatus
    percentDone: number
    lastPart: number
    initialQuizProgress: QuizStatus
    finalQuizProgress: QuizStatus
}

export enum LectionStatus {
    STARTED = "STARTED",
    FINISHED = "FINISHED"
}

export enum QuizStatus {
    STARTED = "STARTED",
    FINISHED = "FINISHED"
}

export const UPDATE_PROGRESS = 'UPDATE_PROGRESS';

export interface UpdateProgressAction {
    type: typeof UPDATE_PROGRESS;
    payload: Progress;
}
