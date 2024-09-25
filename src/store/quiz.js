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
            state.selectedAnswers = Array(action.payload.quizData.length).fill(null);
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
        restartQuiz(state) {
            state.currentQuestionIndex = 0;
            state.selectedAnswers = [];
            state.isOngoingQuiz = true;
        },
        completeQuiz(state) {
            state.isOngoingQuiz = false;
        }
    }
});

export const quizActions = quizSlice.actions;

export default quizSlice;
