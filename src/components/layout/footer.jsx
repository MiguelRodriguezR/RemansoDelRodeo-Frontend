import React from "react";
import styled from "@emotion/styled";
import FooterTip from "../shared/footerTip";

const FooterWrapper = styled.div`
  background-color: #e99935;
  background-image: url("/static/img/transp.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: #46200d;
  margin-top: 20px;
  .limiter {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .top {
      font-weight: bold;
      font-size: 2em;
      font-family: "Barlow Condensed";
    }
    .fotter-tips {
      margin: 20px 0;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    .bottom {
        font-size: 0.8em;
      margin-bottom: 20px;
      text-align:justify;
    }
    .author{
        a{
            color: #46200d !important;
            font-weight: bold;
        }
    }
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      <div className="limiter">
        <div className="top">SALA DE NEGOCIOS</div>
        <div className="fotter-tips">
          <FooterTip
            topText={"Tel:"}
            bottomText={"3439241 - 3137050212"}
            icon={"stay_current_portrait"}
          ></FooterTip>
          <FooterTip
            topText={"Direccion:"}
            bottomText={"Calle 3 # 3-15 Pandiaco"}
            icon={"room"}
          ></FooterTip>
          <FooterTip
            topText={"Hora de Atencion:"}
            bottomText={"10:00am - 11:55pm"}
            icon={"query_builder"}
          ></FooterTip>
          <FooterTip
            topText={"Correo:"}
            bottomText={"correo@correo.com"}
            icon={"alternate_email"}
          ></FooterTip>
        </div>
        <div className="bottom">
          Pellentesque non convallis magna. Donec lorem ante, gravida in
          consectetur vel, molestie non est. Nam quis malesuada turpis, vitae
          viverra odio. Fusce vel metus pretium, rhoncus quam a, aliquam felis.
          Vestibulum urna libero, gravida vel lorem viverra, consequat ornare
          massa. Curabitur bibendum dignissim bibendum. Vestibulum non blandit
          leo. Sed hendrerit mollis dui, non tempor purus placerat ac. Aliquam
          placerat metus sit amet pulvinar egestas. Suspendisse suscipit justo
          at ex consequat vestibulum. Sed sed nibh ipsum. Donec sagittis dui
          tempor quam hendrerit aliquet. Phasellus nisi ipsum, ultrices vel
          vehicula et, porta sit amet nibh. Quisque vestibulum maximus neque ac
          feugiat. Nunc mattis interdum sem, consequat commodo massa commodo ut.
        </div>
        <div className="author">
          Creado por <a href="https://migu.es">Miguel Rodriguez</a> para Vecindario.com - 2021
        </div>
      </div>
    </FooterWrapper>
  );
}

export default Footer;
