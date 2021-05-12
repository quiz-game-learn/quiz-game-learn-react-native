
import auth from '@react-native-firebase/auth';
import db from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

// collection references
const results = db().collection('results')
const quizzesCollection = db().collection('quizzes')
const quizzesResultsCollection = db().collection('quizesResults')
const lessonsResultsCollection = db().collection('lessonsResults')
const partsCollection = db().collection('lessonContentParts')
const coursesCollection = db().collection('courses')
const lessonsCollection = db().collection('lessons')

// export utils/refs
export {
    db,
    auth,
    results,
    quizzesCollection,
    quizzesResultsCollection,
    lessonsResultsCollection,
    coursesCollection,
    lessonsCollection,
    partsCollection,
    storage
}