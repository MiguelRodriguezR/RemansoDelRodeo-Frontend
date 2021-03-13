import React from "react";
import styled from "@emotion/styled";
import { useProgressiveImage } from "../shared/lazyImage";

const DescTopWrapper = styled.div`
  display: flex;
  .left,
  .right {
    width: 50%;
  }
  .left {
    height: 70vh;
    /* background-image: url("/static/img/perritos.png"); */
    background-repeat: no-repeat;
    background-position: right;
    background-size: cover;
  }
  .right {
    display: flex;
    justify-content: center;
    .right-wrapper {
      width: 80%;
      padding: 20px 0;
      .tabs {
        margin-top: 20px;
        .tab {
          margin-top: 5px;
          font-style: italic;
        }
        .tab::before {
          content: "?";
          display: inline-block;
          color: rgba(0,0,0,0);
          width: 20px;
          height: 20px;
          background-image: url("/static/img/tab-icon.png");
          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;
        }
      }
    }
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    .left,
    .right {
      width: 100%;
    }
  }
`;

function DescTop() {

  const loaded = useProgressiveImage("/static/img/perritos.png");
  const placeholder = "perritos-placeholder.jpg";

  return (
    <DescTopWrapper>
      <div className="left" style={{ backgroundImage: `url(${loaded || placeholder})` }}></div>
      <div className="right">
        <div className="right-wrapper">
          <div className="top-title">PROYECTO</div>
          <div className="desc">
            <p>
              Remanso del Rodeo, un proyecto ubicaod en Belén, sector Rodeo
              Alto, un lugar exclusivo con entorno campestre, excelente
              valorización y una bista inigualable sobre rodeo Alto y gran parte
              dela ciudad de Medellin.
            </p>
            <p>
              Cuenta con beneficios únicos de movilidad, cercania a lugares
              comerciales, además de tener diferents vias de acceso.
            </p>
            <strong>Cercano a:</strong>
            <div className="tabs">
              <div className="tab">Clinica las Américas</div>
              <div className="tab">Club el Rodeo</div>
              <div className="tab">Carrera 80</div>
              <div className="tab">Guayanal</div>
              <div className="tab">La Maya</div>
              <div className="tab">Aereopuerto Olaya Herrera</div>
              <div className="tab">Parque Juan Pablo II</div>
              <div className="tab">Sector Comercial Guayabal</div>
              <div className="tab">Éxito de la Gran Via</div>
            </div>
          </div>
        </div>
      </div>
    </DescTopWrapper>
  );
}

export default DescTop;
