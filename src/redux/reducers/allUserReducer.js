import { ActionTypes } from "../constants/action-types";

const initState = {
  allUsers: [],
};

export const allUserReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.SET_ALL_USERS_DATA:
      return { ...state, allUsers: action.payload };
    default:
      return state;
  }
};
