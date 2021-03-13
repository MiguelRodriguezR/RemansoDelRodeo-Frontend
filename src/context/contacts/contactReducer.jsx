import { ADD_CONTACT, CONTACT_ERROR, CONTACT_ADDED } from "../../types";

// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        loading: true,
      };
    case CONTACT_ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        message: action.payload,
      };
    case CONTACT_ADDED:
      return {
        ...state,
        loading: false,
        success: true,
      };
    default:
      return state;
  }
};
