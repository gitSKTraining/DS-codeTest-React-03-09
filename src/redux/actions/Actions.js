import { ActionTypes } from "../constants/action-types";

//creating an action to set all user data in the store.

export const setAllUsers = (allUsers) => {
  return {
    type: ActionTypes.SET_ALL_USERS_DATA,

    payload: allUsers,
  };
};
