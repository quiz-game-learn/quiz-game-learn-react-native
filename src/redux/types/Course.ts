import {Lesson} from "./lesson";

export interface Course {
    id: string,
    type: string,
    title: string,
    subtitle: string,
    alumni: string,
    description: string,
    imageUrl: string,
    date: Date
}

export const UPDATE_COURSES = 'UPDATE_COURSES';

export interface UpdateCoursesAction {
    type: typeof UPDATE_COURSES;
    payload: Course[];
}
