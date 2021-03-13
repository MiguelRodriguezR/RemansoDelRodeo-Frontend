import React, { useReducer } from "react";
import contactReducer from "./contactReducer";
import ContactContext from "./contactContex";
import { ADD_CONTACT, CONTACT_ERROR, CONTACT_ADDED } from "../../types";
import clientAxios from "../../config/axios";

const ContactState = (props) => {
  const initialState = {
    loading: false,
    success: false,
    message: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  const addContact = async (contact) => {
    try {
      dispatch({
        type: ADD_CONTACT,
      });
      await clientAxios.post("api/contacts", contact);
      dispatch({
        type: CONTACT_ADDED,
      });
    } catch (error) {
      dispatch({
        type: CONTACT_ERROR,
        payload: "Ha ocurrido un error. Intenta de nuevo más tarde",
      });
    }
  };

  return (
    <ContactContext.Provider
      value={{
        loading: state.loading,
        success: state.success,
        message: state.message,
        addContact,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
