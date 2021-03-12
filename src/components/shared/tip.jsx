import React from "react";
import styled from "@emotion/styled";

const TipWrapper = styled.div`
  padding: 20px;
  background-color: white;
  border-radius: 20px 50px 60px 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #5a3928;
  font-weight: bold;
  width: 160px;
  height: 150px;
  text-align: center;
  font-size: 0.8em;
  align-self: center;
  img {
    width: 90px;
  }
`;

function Tip({ topText, bottomText, image }) {
  return (
    <div className="center-x">
      <TipWrapper>
        <img src={image} alt="" />
        <div className="top-text">{topText}</div>
        <div className="bottom-text">{bottomText}</div>
      </TipWrapper>
    </div>
  );
}

export default Tip;
