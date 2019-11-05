import { all } from "redux-saga/effects";
import { getQuestionsAsync, resetQuestionsAsync } from "./questions.actions";
import { setResponsesAsync, resetResponsesAsync } from "./setResponses.actions";

export default function* rootSaga() {
  yield all([
    getQuestionsAsync(),
    resetQuestionsAsync(),
    setResponsesAsync(),
    resetResponsesAsync(),
  ])
}