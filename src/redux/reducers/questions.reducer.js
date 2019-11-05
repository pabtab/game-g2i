import { GET_QUESTIONS_API, GET_QUESTIONS_API_LOADING, RESET_QUESTIONS } from "../actions/actionTypes"

const initialState = {
  isLoading: false,
  payload: []
};

export default (state = initialState, { type, payload, isLoading }) => {
  switch (type) {

  case GET_QUESTIONS_API:
    return { ...state, payload, isLoading }

  case GET_QUESTIONS_API_LOADING: 
    return {
      ...state,
      isLoading
    }

  case RESET_QUESTIONS:
    return {
      ...initialState
    }

  default:
    return state
  }
}
