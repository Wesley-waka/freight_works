import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import { BiSolidMap } from "react-icons/bi";
import { TbDrone } from "react-icons/tb";
import { BsCashCoin } from "react-icons/bs";

import styled from "styled-components";
const Serve = () => {
  const Wrapper = styled.div`
    // background: var(--clr-grey-9);
    width: 100vw;
    height: 60vh;
    padding: 2em;

    .top {
      margin-top: 1rem;
    }
    // .top_card {
    //   margin-top: 2rem;
    // }
    .header {
      text-align: center;
      padding-bottom: 0.5rem;
    }

    .offers {
      // padding-left: 10rem;
      // padding-top: 0.5rem;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      .offers_info {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        .serve_card {
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
          border: 0.3rem var(--clr-primary-8);
          // border-style: outset;
          // max-width: 15vw;
          padding: 1rem 5rem;
          border-radius: 0.5rem;
          background-color: var(--clr-primary-10);
          .color {
            color: var(--clr-primary-5);
            size: 2em;
            display: inline;
          }
          p {
            display: inline;
          }
        }
      }
    }
  `;
  return (
    <Wrapper>
      <h3 className="header">
        Why Choose Us For <span>your Service</span>
      </h3>
      <div className="offers">
        <div className="offers_info">
          <div className="serve_card">
            <BiSolidMap className="color" />
            <p>Online Support</p>
          </div>
          <div className="serve_card top">
            <FaMapMarkedAlt className="color" />
            <p>Order Tracking</p>
          </div>
        </div>
        <div className="offers_info ">
          <div className="serve_card">
            <TbDrone className="color" />
            <p>Drone Delivery</p>
          </div>
          <div className="serve_card top">
            <BsCashCoin className="color" />
            <p>Cost Save</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Serve;
