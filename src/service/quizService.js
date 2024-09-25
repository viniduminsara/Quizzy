import {collection, doc, getDoc, getDocs} from "firebase/firestore";
import {db} from "../utils/firebase.js";

const getAllQuizzes = async () => {
    const querySnapshot = await getDocs(collection(db, "quiz"));

    const quizData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }));

    return quizData;
};

const getQuizById = async (quizId) => {
    const docRef = doc(db, "quiz", quizId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return {id: docSnap.id, ...docSnap.data()};
    } else {
        throw new Error("Quiz not found");
    }
}

export const quizService = { getAllQuizzes, getQuizById };
