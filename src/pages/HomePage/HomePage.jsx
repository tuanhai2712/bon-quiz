import React from "react";
import styled from "styled-components";
import Logo from "../../assets/images/logo.png";
import Icon1 from "../../assets/images/icon/icon1.png";
import Icon2 from "../../assets/images/icon/icon2.png";
import Icon3 from "../../assets/images/icon/icon3.png";
function HomePage() {
  return (
    <Container>
      <div className="icon-1">
        <img src={Icon1} alt="icon" className="vert-move" />
      </div>
      <div className="icon-2">
        <img src={Icon2} alt="icon" className="vert-move-2" />
      </div>
      <div className="icon-3">
        <img src={Icon3} alt="icon" className="vert-move-3" />
      </div>
      <HeaderContainer>
        <img src={Logo} alt="logo" />
        <div className="menu-container">
          <div className="menu-item">Take a quiz</div>
          <div className="menu-item">THE ARCHETYPES</div>
        </div>
      </HeaderContainer>
      <BodyContainer>
        <div className="body-title">
          <h1>
            THE BRAND
            <br />
            ARCHETYPES
          </h1>
        </div>
        <div className="body-description">
          <span>
            Who are you in the quest for customers’ heart, mind and wallet?
            <br />
            Let’s brand your brand!
          </span>
        </div>
        <div className="btn-start">TAKE THE QUIZ</div>
      </BodyContainer>
    </Container>
  );
}

const Container = styled.div`
  background: #46007a;
  height: 100vh;
  margin: auto;
  position: relative;
  .icon-1 {
    position: fixed;
    right: -10px;
    top: 50px;
    img.vert-move {
      animation: mover1 1s infinite alternate;
    }
    img.vert-move {
      animation: mover1 1s infinite alternate;
      @keyframes mover1 {
        0% {
          transform: translateY(100px) translateX(-5px);
        }
        100% {
          transform: translateY(0);
        }
      }
    }
  }
  .icon-2 {
    position: fixed;
    top: 0px;
    left: 35%;
    img.vert-move-2 {
      animation: mover2 1s infinite alternate;
    }
    img.vert-move-2 {
      animation: mover2 1s infinite alternate;
      @keyframes mover2 {
        0% {
          transform: translateY(-60px) translateX(0);
        }
        100% {
          transform: translateY(0) translateX(-20px);
        }
      }
    }
  }
  .icon-3 {
    position: fixed;
    top: 0px;
    left: 24%;
    img.vert-move-3 {
      animation: mover3 1s infinite alternate;
      @keyframes mover3 {
        0% {
          transform: translateY(-60px) translateX(0);
        }
        100% {
          transform: translateY(0) translateX(20px);
        }
      }
    }
  }
`;

const HeaderContainer = styled.div`
  padding: 80px 120px;
  display: flex;
  justify-content: space-between;
  .menu-container {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    .menu-item {
      margin: 0px 80px;
    }
  }
`;

const BodyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .body-title {
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    text-align: center;
    text-transform: uppercase;
  }
  .body-description {
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    text-transform: capitalize;
  }
  .btn-start {
    margin-top: 65px;
    width: 544px;
    height: 80px;
    border-radius: 78px;
    color: #46007a;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    background: #fff;
    background: linear-gradient(to left, #fff 50%, #16afff 50%) right;
    background-size: 200%;
    transition: 0.5s ease-out;
    :hover {
      cursor: pointer;
      background-position: left;
      color: #fff;
    }
  }
`;
export default HomePage;
