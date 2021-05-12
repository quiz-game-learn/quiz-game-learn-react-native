import {
    coursesCollection,
    lessonsCollection, lessonsResultsCollection,
    partsCollection,
    quizzesCollection,
    quizzesResultsCollection
} from "./firebase";

import { v4 as uuidv4 } from 'uuid';
import {Quiz} from "../redux/types/quiz";
import {Lesson, Part} from "../redux/types/lesson";
import {Course} from "../redux/types/Course";
import {LessonResults, QuizResults} from "../redux/types/quizResults";

export const getQuizzesAvailable = async (limit: number, skip: number): Promise<Quiz[]> => {
    //const result  = await quizzesCollection.limit(10).where("public", "==", true).orderBy("date", "desc").get()
    const result = await quizzesCollection.limit(limit).where("public", "==", true).get()
    const quizzes = []

    for (const doc of result.docs) {
        quizzes.push(doc.data() as Quiz)
    }
    console.log(quizzes)
    return quizzes
}

export const saveQuiz = async (quiz: Quiz) => {
    if (!quiz.id || quiz.id === "None") {
        quiz.id = uuidv4()
    }
    console.log(quiz)
    return quizzesCollection.doc(quiz.id).set(quiz)
}

export const savePart = async (part: Part) => {
    if (!part.id || part.id === "None") {
        part.id = uuidv4()
    }
    console.log(part)
    return partsCollection.doc(part.id).set(part)
}


export const getLessonsAvailable = async (limit: number, skip: number): Promise<Lesson[]> => {
    //const result  = await quizzesCollection.limit(10).where("public", "==", true).orderBy("date", "desc").get()
    const result = await lessonsCollection.limit(limit).get()
    const lessons = []

    for (const doc of result.docs) {
        lessons.push(doc.data() as Lesson)
    }
    console.log(lessons)
    return lessons
}

export const getLessonsInCourse = async (limit: number, skip: number, courseId: string): Promise<Lesson[]> => {
    //const result  = await quizzesCollection.limit(10).where("public", "==", true).orderBy("date", "desc").get()
    const result = await lessonsCollection.limit(limit).where("courseId", "==", courseId).get()
    const lessons = []

    for (const doc of result.docs) {
        lessons.push(doc.data() as Lesson)
    }
    console.log(lessons)
    return lessons
}

export const saveLesson = async (lesson: Lesson) => {
    if (!lesson.id) {
        lesson.id = uuidv4()
    }
    return lessonsCollection.doc(lesson.id).set(lesson)
}


export const getCoursesAvailable = async (limit: number, skip: number): Promise<Course[]> => {
    const result = await coursesCollection.limit(limit).get()
    const lessons = []

    for (const doc of result.docs) {
        lessons.push(doc.data() as Course)
    }
    console.log(lessons)
    return lessons
}

export const saveCourse = async (course: Course) => {
    if (!course.id) {
        course.id = uuidv4()
    }
    return coursesCollection.doc(course.id).set(course)
}

export const getLesson = async (id: string): Promise<Lesson| null > => {

    const result = await lessonsCollection.where("id", "==", id).get()

    console.log(id,result)
    return result.docs[0].data() as Lesson
}

export const getQuiz = async (id: string): Promise<Quiz | null> => {
    const result = await quizzesCollection.where("id", "==", id).get()

    console.log(id,result)
    return result.docs[0].data() as Quiz
}

export const getCourse = async (id: string): Promise<Course | null> => {
    const result = await coursesCollection.where("id", "==", id).get()

    console.log(id,result)
    return result.docs[0].data() as Course
}

export const getPart = async (id: string): Promise<Part | null> => {
    const result = await partsCollection.where("id", "==", id).get()
    console.log(id,result)
    return result.docs[0].data() as Part
}

export const getQuizResults = async (quizId: string, userId: string): Promise<QuizResults | null> => {
    const result = await quizzesResultsCollection.where("quizId", "==", quizId)
        .where("userId", "==", userId).get()

    console.log(quizId,result)
    return result.docs[0].data() as QuizResults
}

export const saveQuizResults = async (quizResults: QuizResults) => {
    if (!quizResults.id) {
        quizResults.id = uuidv4()
    }
    return quizzesResultsCollection.doc(quizResults.id).set(quizResults)
}

export const getLessonResults = async (lessonId: string, userId: string): Promise<LessonResults | null> => {
    const result = await lessonsResultsCollection.where("lessonId", "==", lessonId)
        .where("userId", "==", userId).get()

    console.log(lessonId,result)
    return result.docs[0].data() as LessonResults
}

export const saveLessonResults = async (lessonResults: LessonResults) => {
    if (!lessonResults.id) {
        lessonResults.id = uuidv4()
    }
    return lessonsResultsCollection.doc(lessonResults.id).set(lessonResults)
}