import { GET_COMMENTS } from "../actions/comments.actions";

const initialState = {};

export default function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COMMENTS:
      return action.payload;
    default:
      return state;
  }
}
