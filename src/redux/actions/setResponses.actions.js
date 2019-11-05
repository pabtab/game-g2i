
import { put, takeEvery } from 'redux-saga/effects';
import { SET_RESPONSE_ASYNC, SET_RESPONSE, RESET_RESPONSES, RESET_RESPONSES_ASYNC } from './actionTypes';

function* setResponses({payload}) {
  yield put({ type: SET_RESPONSE, payload, isLoading: true });
}

export function* setResponsesAsync() {
  yield takeEvery(SET_RESPONSE_ASYNC, setResponses);
}

export const setResponseAction = (response) => ({
  type: SET_RESPONSE_ASYNC,
  payload: response
})


function* resetResponses({payload}) {
  yield put({ type: RESET_RESPONSES, payload, isLoading: true });
}

export function* resetResponsesAsync() {
  yield takeEvery(RESET_RESPONSES_ASYNC, resetResponses);
}

export const resetResponsesAction = () => ({
  type: RESET_RESPONSES_ASYNC
})