import React from "react";
import styled from "@emotion/styled";
import Tip from "../shared/tip";

const CommonZonesWrapper = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  .subtitle {
    margin-top: 20px;
    font-style: italic;
    width: 270px;
    text-align: center;
    color: #939393;
  }
  .tip-container {
    margin-top: 25px;
    width: 60%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 40px;
  }
  @media (max-width: 1100px) {
    .tip-container {
      width: 80%;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (max-width: 450px) {
    .tip-container {
      margin-top: 0px;
      width: 100%;
      transform: scale(0.8, 0.8);
    }
  }
`;

const CommonZones = () => {
  return (
    <CommonZonesWrapper>
      <div className="top-title">ZONAS COMÚNES</div>
      <div className="subtitle">
        Un lugar exclusivo para brindarte a ti y a tu familia todo lo que
        necesitan.
      </div>
      <div className="tip-container">
        <Tip
          topText={"Porteria"}
          bottomText={"24 horas"}
          image={"/static/img/zones/porteria.png"}
        ></Tip>
        <Tip
          topText={"Salon Social"}
          bottomText={""}
          image={"/static/img/zones/salon.png"}
        ></Tip>
        <Tip
          topText={"Circuito cerrado"}
          bottomText={"de televisión"}
          image={"/static/img/zones/circuito.png"}
        ></Tip>
        <Tip
          topText={"Parqueadero para"}
          bottomText={"visitantes"}
          image={"/static/img/zones/parqueadero.png"}
        ></Tip>
        <Tip
          topText={"Juegos"}
          bottomText={"infantiles"}
          image={"/static/img/zones/juegos.png"}
        ></Tip>
        <Tip
          topText={"Gimnasio"}
          bottomText={"semidotado"}
          image={"/static/img/zones/gimnasio.png"}
        ></Tip>
        <Tip
          topText={"Piscina de adultos"}
          bottomText={"y niños"}
          image={"/static/img/zones/piscina.png"}
        ></Tip>
        <Tip
          topText={"Cancha multifuncional"}
          bottomText={"recreativa"}
          image={"/static/img/zones/cancha.png"}
        ></Tip>
      </div>
    </CommonZonesWrapper>
  );
};

export default CommonZones;
