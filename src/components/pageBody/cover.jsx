import React from "react";
import styled from "@emotion/styled";
import Form from "../form/form";

const CoverWrapper = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 800px;
  background-image: url("/static/img/cover.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .left,
    .right {
      max-width: 360px;
      width: 100%;
      height: 325px;
      padding: 0 45px;
      overflow: hidden;
    }
    .left {
      border-radius: 55px 0 0 0;
      background-color: #e89836;
      .top-text,
      .first-central,
      .second-central {
        font-family: "Barlow Condensed";
        display: flex;
      }
      .top-text,
      .first-central {
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .top-text {
        color: #eca43d;
        padding: 10px 20px;
        background-color: #782e11;
        border-radius: 0 0 35px 0;
        .up {
          font-size: 2.3em;
        }
        .down {
          margin-top: -12px;
          font-size: 3.2em;
        }
      }
      .first-central {
        margin-top: 10px;
        color: #782e11;
        .up {
          font-size: 2.6em;
        }
        .down {
          margin-top: -5px;
          font-size: 1.9em;
          display: flex;
          align-items: flex-start;
        }
      }
      .second-central {
        align-items: flex-start;
        justify-content: space-between;
        padding: 5px;
        background-color: #46200d;
        color: #eca43d;
        font-size: 1.9em;
        font-weight: 500;
      }
      .separator {
        width: 100%;
        height: 2px;
        margin-top: 20px;
        background-color: #46200d;
      }
      .bottom-text {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 5px;
        font-size: 0.85em;
        color: #782e11;
      }
    }
    .right {
      border-radius: 0 0 55px 0;
      background-color: #b25d31;
    }
  }
  @media (max-width: 768px) {
    .content {
        margin-top: 100px;
        flex-direction: column;
    }
  }
  @media (max-width: 450px) {
    .content {
        transform: scale(0.8,0.8);
    }
  }
`;

function Cover() {
  return (
    <CoverWrapper>
      <div className="content">
        <div className="left">
          <div className="top-text">
            <div className="up">
              OBTÉN <strong>BONO</strong> DE
            </div>
            <div className="down">
              <strong>$2'000.000</strong>
            </div>
          </div>
          <div className="first-central">
            <div className="up">
              LUGAR <strong>EXCLUSIVO</strong>
            </div>
            <div className="down">
              <small>CON</small>ENTORNO CAMPESTRE,
            </div>
          </div>
          <div className="second-central">
            <small>Y UNA </small> VISTA INIGUALABLE
          </div>
          <div className="separator"></div>
          <div className="bottom-text">
            MEDELLÍN BELEN <strong>- SECTOR RODEO ALTO</strong>
          </div>
        </div>
        <div className="right">
          <Form></Form>
        </div>
      </div>
    </CoverWrapper>
  );
}

export default Cover;
