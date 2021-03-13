import React, { useContext } from "react";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import ContactContext from "../../context/contacts/contactContex";
import Loader from "../shared/loader";

const FormContainer = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  /* justify-content: center; */
  align-items: center;
  .top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #502610;
  }
  form {
    width: 100%;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .input-text {
      margin: 5px 0;
      width: 100%;
      padding: 5px 9px;
      border-radius: 3px;
      border: none;
    }
    .agreement {
      color: white;
      font-size: 0.55em;
    }
    .btn-submit {
      background-color: #46200d;
      color: white;
      border-radius: 2px;
      margin-top: 7px;
      padding: 5px 20px;
      border: none;
      cursor: pointer;
    }
  }
`;

function Form() {
  const { loading, success, message, addContact } = useContext(ContactContext);
  const { register, handleSubmit, errors } = useForm();

  const submitContact = (data) => {
    console.log("data", data);
    addContact(data);
  };

  const requiredMessage = 'Este campo es requerido'

  return (
    <div className="relative">
      {loading && (
        <div className="loader">
          <Loader></Loader>
          <div>ENVIANDO...</div>
        </div>
      )}
      {success && (
        <div className="success-message">
          Datos recibidos correctamente 🥳🥳. Pronto uno de nuestros asesores se pondrá en contacto contigo
        </div>
      )}
      {!loading && !success && (
        <FormContainer>
          <div className="top">
            <div className="up">¡DÉJANOS TUS DATOS Y TE </div>
            <div className="down">
              <strong>MANTENDREMOS INFORMADO!</strong>
            </div>
          </div>
          <form action="" onSubmit={handleSubmit(submitContact)}>
            <input
              type="text"
              className="input-text"
              name="nombre"
              placeholder="Nombre*"
              ref={register({ required: true })}
            />
            {errors.nombre && (
              <span className="error">{requiredMessage}</span>
            )}
            <input
              type="text"
              className="input-text"
              name="email"
              placeholder="Correo Electronico*"
              ref={register({
                required: true,
                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              })}
            />
            {errors.email?.type === "required" && (
              <span className="error">{requiredMessage}</span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="error">Correo inválido</span>
            )}
            <input
              type="text"
              className="input-text"
              name="telefono"
              placeholder="Teléfono*"
              ref={register({ required: true, pattern: /^[3][1-9]\d{8}$/ })}
            />
            {errors.telefono?.type === "required" && (
              <span className="error">{requiredMessage}</span>
            )}
            {errors.telefono?.type === "pattern" && (
              <span className="error">Teléfono inválido</span>
            )}
            <input
              type="text"
              className="input-text"
              name="ciudad"
              placeholder="Ciudad*"
              ref={register({ required: true })}
            />
            {errors.ciudad && (
              <span className="error">{requiredMessage}</span>
            )}
            <textarea
              className="input-text"
              name="comentario"
              placeholder="Comentario*"
              ref={register({ required: true })}
            ></textarea>
            {errors.comentario && (
              <span className="error">{requiredMessage}</span>
            )}
            <div className="agreement">
              Al hacer click en enviar, estás aceptando los{" "}
              <strong>términos y condiciones</strong>
            </div>
            {message && (
              <span className="error orange">{message}</span>
            )}
            <input type="submit" className="btn-submit" value="ENVIAR" />
          </form>
        </FormContainer>
      )}
    </div>
  );
}

export default Form;
