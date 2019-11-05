import { SET_RESPONSE, RESET_RESPONSES } from "../actions/actionTypes"

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case SET_RESPONSE:
    return [ ...state, payload ];

  case RESET_RESPONSES:
    return initialState;

  default:
    return state;
  }
}
