import { VIEW_BRANCHES, BRANCHES_ERROR } from "../actions/types";

const initialState = {
  branch: null,
  branches: [],
  loading: true,
  error: {},
};

export default function branches(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case VIEW_BRANCHES:
      return {
        ...state,
        branches: payload,
        loading: false,
      };

    case BRANCHES_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        branch: null,
      };

    default:
      return state;
  }
}
