import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  // background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
  //   url(/hero.jpg);
  background-image: -webkit-linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url(/hero.jpg);
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(/hero.jpg);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: white;
  height: 70vh;
  .hero {
    color: white;
  }

  p {
    max-width: 60vw;
    padding-top: 5rem;
    color: white;
    // padding-bottom: 3rem;
    margin-left: 7rem;
    // display: flex;
    // flex-direction: column;
  }
  .start-button {
    padding: 5px 20px;
    border-radius: 10px;
    border: none;
    margin-bottom: 2rem;
    margin-left: 7rem;
    margin-bottom: 5rem;
    display: inline-block;
    // padding-bottom: 3rem;
  }
`;

const Info = styled.div`
  background: var(--clr-primary-3);
  // max-width: 70vw;

  .image {
    height: 50px;
    width: 70px;
    object-fit: fit;
  }
  .info-section {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    max-width: 90vw;
    margin-left: 5rem;
    .users {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .number {
        display: block;
      }
      .space {
        margin-right: 2rem;
      }
    }
    .company {
      margin: 2rem 0rem;
    }
  }
`;

const PageHero = () => {
  return (
    <>
      <Wrapper>
        <div className="hero">
          <p>
            Our cargo tracking website provides you with real-time information
            and updates on the status of your shipments. Whether you're sending
            goods across the country or around the world, our user-friendly
            platform ensures that you stay informed every step of the way. With
            cutting-edge technology and seamless integration, we bring you a
            hassle-free experience, allowing you to track your cargo with ease.
          </p>
          <button className="start-button">Get started</button>
        </div>
      </Wrapper>
      <Info>
        <div className="info-section">
          <div className="users">
            <h5 className="space">
              Drivers Registered:
              <span className="number ">1000+</span>
            </h5>

            <h5>
              Happy Clients:
              <span className="number">1000+</span>
            </h5>
          </div>
          <div className="company">
            <h5>Trusted by:</h5>
            <img className="image" src="/logo/Sony-logo.svg" alt="suzuki" />
            <img className="image" src="/logo/Plaid.svg" alt="suzuki" />
            <img className="image" src="/logo/Puma.svg" alt="puma" />
            <img className="image" src="/logo/Shein.png" alt="suzuki" />
          </div>
        </div>
      </Info>
    </>
  );
};

export default PageHero;
