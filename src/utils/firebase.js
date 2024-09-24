import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAyqkcxT06LC47T3vYFd5KbkYvRUkjEEqw",
    authDomain: "quizzy-34901.firebaseapp.com",
    projectId: "quizzy-34901",
    storageBucket: "quizzy-34901.appspot.com",
    messagingSenderId: "753255723318",
    appId: "1:753255723318:web:2872d58952fe1f1838c397"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth(app);
