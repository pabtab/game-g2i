
import { put, takeLatest } from 'redux-saga/effects';
import {getQuestionsApi} from '../../api/';
import { GET_QUESTIONS_API, GET_QUESTIONS_API_ERROR, GET_QUESTIONS_API_LOADING, GET_QUESTIONS_API_ASYNC, RESET_QUESTIONS, RESET_QUESTIONS_ASYNC } from './actionTypes';

function* getQuestions() {
  yield put({ type: GET_QUESTIONS_API_LOADING, isLoading: true });

  try {
    const response = yield getQuestionsApi();

    yield put({ type: GET_QUESTIONS_API, payload: response, isLoading: false });
  } catch (error) {
    yield put({ type: GET_QUESTIONS_API_ERROR, payload: [], isLoading: false });
    
  }
}

export function* getQuestionsAsync() {
  yield takeLatest(GET_QUESTIONS_API_ASYNC, getQuestions);
}

export const getQuestionsAction = () => ({
  type: GET_QUESTIONS_API_ASYNC,
})

function* resetQuestions() {
  yield put({ type: RESET_QUESTIONS });
}

export function* resetQuestionsAsync() {
  yield takeLatest(RESET_QUESTIONS_ASYNC, resetQuestions);
}

export const resetQuestionsAction = () => ({
  type: RESET_QUESTIONS_ASYNC
})