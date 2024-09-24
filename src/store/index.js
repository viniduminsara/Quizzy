import {configureStore} from "@reduxjs/toolkit";
import quizSlice from "./quiz.js";

const store = configureStore({
    reducer: {
        quiz: quizSlice.reducer,
    }
});


export default store;
