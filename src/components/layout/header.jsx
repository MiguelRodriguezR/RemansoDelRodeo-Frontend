import React from "react";
import styled from "@emotion/styled";
import { slide as BurgerMenu } from "react-burger-menu";

const HeaderLine = styled.div`
  width: 100%;
  height: 60px;
  background-color: #46200d;
  display: flex;
  padding: 0 50px;
  justify-content: space-between;
  .logo {
    height: 126px;
    padding: 10px;
    background-color: white;
    border-radius: 0 0 20px 20px;
  }
  .menu {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .menu-item {
      color: white;
      padding: 0 10px;
      border-right: solid 2px white;
      cursor: pointer;
      &:last-child {
        border-right: hidden;
      }
    }
  }
  .dummy {
    width: 280px;
  }
  @media (max-width: 768px) {
    justify-content: center;
    height: 10px;
    .menu,
    .dummy {
      display: none;
    }
  }
  @media (max-width: 450px) {
    .logo {
        margin-top: -20px;
        transform: scale(0.8,0.8);
    }
  }
`;

const BurgerWrapper = styled.div`
  display: none;
  z-index: 100;
  .burger-button {
    position: fixed;
    width: 26px;
    height: 20px;
    left: 16px;
    top: 16px;
  }
  .burger-bars {
    background: #373a47;
  }
  .burger-bars-hover {
    background: #a90000;
  }
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }
  .bm-cross {
    background: #bdc3c7;
  }
  .bm-menu-wrap {
    position: fixed;
    height: 100%;
  }
  .burger-menu {
    background: #46200d;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }
  .bm-morph-shape {
    fill: #373a47;
  }
  .bm-item-list {
    color: #b8b7ad;
    padding: 0.8em;
  }
  .bm-item {
    display: inline-block;
  }
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
  .menu-item {
    color: white;
  }
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    /* width: 100%;
    height: 10px;
    background-color: #46200d; */
  }
`;

const Header = () => {
  return (
    <div>
      <HeaderLine>
        <div className="logo">
          <img src="/static/img/logo.png" alt="" />
        </div>
        <div className="menu">
          <a className="menu-item" href="http://localhost:3000/">
            Proyecto
          </a>
          <a className="menu-item" href="http://localhost:3000/">
            Galería
          </a>
          <a className="menu-item" href="http://localhost:3000/">
            Apartamentos
          </a>
          <a className="menu-item" href="http://localhost:3000/">
            Mapa
          </a>
          <a className="menu-item" href="http://localhost:3000/">
            Contacto
          </a>
        </div>
        <div className="dummy"></div>
      </HeaderLine>
      <BurgerWrapper id="outer-container">
        <BurgerMenu
          menuClassName={"burger-menu"}
          overlayClassName={"bm-overlay"}
          itemListClassName={"bm-item-list"}
          morphShapeClassName={"bm-morph-shape"}
          crossButtonClassName={"bm-cross-button"}
          crossClassName={"bm-cross"}
          burgerBarClassName={"burger-bars"}
          burgerButtonClassName={"burger-button"}
          outerContainerId={"outer-container"}
        >
          <a className="menu-item" href="http://localhost:3000/">
            Proyecto
          </a>
          <a className="menu-item" href="http://localhost:3000/">
            Galería
          </a>
          <a className="menu-item" href="http://localhost:3000/">
            Apartamentos
          </a>
          <a className="menu-item" href="http://localhost:3000/">
            Mapa
          </a>
          <a className="menu-item" href="http://localhost:3000/">
            Contacto
          </a>
        </BurgerMenu>
      </BurgerWrapper>
    </div>
  );
};

export default Header;
