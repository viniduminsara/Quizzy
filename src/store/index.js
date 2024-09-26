import {configureStore} from "@reduxjs/toolkit";
import quizSlice from "./quiz.js";
import authSlice from "./auth.js";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        quiz: quizSlice.reducer,
    }
});


export default store;
