import React, { useState } from "react";
import styled from "@emotion/styled";

const FormContainer = styled.div`
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    /* justify-content: center; */
    align-items: center;
    .top{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color:#502610;
    }
    form{
        width: 100%;
        margin-top: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .input-text{
            margin: 5px 0;
            width: 100%;
            padding: 5px 9px;
            border-radius: 3px;
            border: none;
        }
        .agreement{
            color: white;
            font-size: 0.55em;
        }
        .btn-submit{
            background-color: #46200D;
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
  const [contact, saveContact] = useState({
    nombre: "",
    email: "",
    telefono: "",
    ciudad: "",
    comentario: "",
  });

  const submitContact = (e) => {
    e.preventDefault();
 }

  const onChangeContact = (e) => {
    saveContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <FormContainer>
      <div className="top">
        <div className="up">¡DÉJANOS TUS DATOS Y TE </div>
        <div className="down">
          <strong>MANTENDREMOS INFORMADO!</strong>
        </div> 
      </div>
      <form action="" onSubmit={submitContact}>
          <input
            type="text"
            className="input-text"
            name="nombre"
            value={contact.nombre}
            onChange={onChangeContact}
            placeholder="Nombre*"
          />
          <input
            type="text"
            className="input-text"
            name="email"
            value={contact.email}
            onChange={onChangeContact}
            placeholder="Correo Electronico*"
          />
          <input
            type="text"
            className="input-text"
            name="telefono"
            value={contact.telefono}
            onChange={onChangeContact}
            placeholder="Teléfono*"
          />
          <input
            type="text"
            className="input-text"
            name="ciudad"
            value={contact.ciudad}
            onChange={onChangeContact}
            placeholder="Ciudad*"
          />
          <textarea
            className="input-text"
            name="comentario"
            value={contact.comentario}
            onChange={onChangeContact}
            placeholder="Comentario*"
          ></textarea>
          <div className="agreement">
              Al hacer click en enviar, estás aceptando los <strong>términos y condiciones</strong>
          </div>
          <input
            type="submit"
            className="btn-submit"
            value="ENVIAR"
          />
        </form>
    </FormContainer>
  );
}

export default Form;
