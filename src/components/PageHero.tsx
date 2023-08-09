import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: yellow;
  p {
    max-width: 60vw;
    padding-top: 5rem;
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

const PageHero = () => {
  return (
    <Wrapper>
      <p>
        Our cargo tracking website provides you with real-time information and
        updates on the status of your shipments. Whether you're sending goods
        across the country or around the world, our user-friendly platform
        ensures that you stay informed every step of the way. With cutting-edge
        technology and seamless integration, we bring you a hassle-free
        experience, allowing you to track your cargo with ease.
      </p>
      <button className="start-button">Get started</button>
    </Wrapper>
  );
};

export default PageHero;
