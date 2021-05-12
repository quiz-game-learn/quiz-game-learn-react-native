import {Quiz} from "./quiz";

export interface Lesson {
    id: string,
    type: string,
    title: string,
    createdAt: Date,
    updatedAt: Date,
    description: string,
    frontImage: string,
    subtitle: string,
    parts: Part[],
    difficultyPercent: number,
    initialQuiz: Quiz,
    finalQuiz: Quiz,
    quizzes: Quiz[],
    public: boolean,
    courseId: string,
    imageUrl:string,
    date: Date
}

export interface Part {
    id:string,
    lessonId:string,
    title: string,
    subtitle: string,
    content: string,
    partNumber: number,
    headImageUrl: string,
}

export const UPDATE_ACTIVE_LESSON = 'UPDATE_ACTIVE_LECTION';

export interface UpdateActiveLessonAction {
    type: typeof UPDATE_ACTIVE_LESSON;
    payload: Lesson;
}


export const UPDATE_LESSONS = 'UPDATE_LECTIONS';

export interface UpdateLectionsAction {
    type: typeof UPDATE_LESSONS;
    payload: {activeLessons:Lesson[]};
}
