import {createSlice} from "@reduxjs/toolkit";

const initialQuizState = {
    currentQuestionIndex: 0,
    selectedAnswers: [],
    isOngoingQuiz: false,
}

const quizSlice = createSlice({
    name: 'quiz',
    initialState: initialQuizState,
    reducers: {
        setQuizData(state, action) {
            state.quizData = action.payload;
            state.selectedAnswers = Array(action.payload.length).fill(null);
            state.isOngoingQuiz = true;
        },
        answerSelect(state, action) {
            const { index } = action.payload;
            state.selectedAnswers[state.currentQuestionIndex] = index;
        },
        selectQuestion(state, action) {
            const { index } = action.payload;
            state.currentQuestionIndex = index;
        },
        completeQuiz(state) {
            state.isOngoingQuiz = false;
        }
    }
});

export const quizActions = quizSlice.actions;

export default quizSlice;
