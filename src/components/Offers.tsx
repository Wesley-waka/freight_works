import React from "react";
import styled from "styled-components";

const Offers = () => {
  const Wrapper = styled.div`
    background: var(--clr-primary-3);
    width: 100vw;
    height: 60vh;
    .header {
      text-align: center;
      padding-bottom: 0.5rem;
    }
    .offers {
      //   max-width: 90vw;
      padding: 2rem 8rem;
    }
    // span {
    //   display: block;
    // }
    img {
      height: 10rem;
      //   width: 10rem;
      object-fit: contain;
      margin-right: 4rem;
      border-radius: 0.2rem;
    }
    .offer_details {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      p {
        line-height: 1.5rem;
      }
      button {
        margin-top: 1.5rem;
        padding: 0.5rem 2rem;
        border: none;
        border-radius: 1rem;
      }
    }
  `;
  return (
    <Wrapper>
      <div className="offers">
        <h3 className="header">
          Safe Reliable Logistic <span>Solution</span>
        </h3>
        <div className="offer_details">
          <img src="/services/offer.jpg" alt="" />
          <p>
            Tracking your cargo has never been simpler. Our advanced GPS and
            tracking systems ensure accuracy and reliability, giving you peace
            of mind as your cargo makes its journey.
            <button>Get Started</button>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Offers;
