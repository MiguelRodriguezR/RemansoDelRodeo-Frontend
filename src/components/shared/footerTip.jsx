import React from "react";
import styled from "@emotion/styled";

const TipWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  span {
    font-size: 4em;
  }
  .top-text {
    font-weight: bold;
  }
  .bottom-text {
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

function FooterTip({ topText, bottomText, icon }) {
  return (
    <TipWrapper>
      <span className="material-icons">{icon}</span>
      <div className="top-text">{topText}</div>
      <div className="bottom-text">{bottomText}</div>
    </TipWrapper>
  );
}

export default FooterTip;
