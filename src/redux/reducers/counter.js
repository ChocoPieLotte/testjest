import ActionTypes from '../constants';

export const initialState = {
  count: 0
};

export default function counter(state = initialState, action = {}) {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case ActionTypes.DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return { ...state };
  }
}