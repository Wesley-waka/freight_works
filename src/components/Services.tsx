import React from "react";
import styled from "styled-components";

const Services = () => {
  const Wrapper = styled.div`
    padding: 2rem 0rem;
    max-width: 60vw;

    .service {
      // max-width: 90vw;
      padding-left: 3.5rem;

      .service_header {
        // max-width: 50vw;
      }
      .service_logo {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
      img {
        width: 10rem;
        height: 8rem;
        display: inline-block;
      }
      img > *:not(:last-child) {
        margin-right: 6rem;
      }
      .space {
        margin-right: 2rem;
      }

      .service_details {
        display: flex;
        flex-direction: column;
        align-items: space-evenly;
      }
    }
  `;

  return (
    <Wrapper>
      <div className="service">
        <div className="service_header">
          <h3>We Provide Safe And Reliable Cargo Solutions</h3>
        </div>
        <div className="service_logo">
          <div className="service_details">
            <img
              className="space"
              src="/services/cargo_ship.jpg"
              alt="cargo_truck"
            />
            <h4>Ocean Freight</h4>
          </div>

          <div className="service_details">
            <img
              className="space"
              src="/services/truck_cargo.jpg"
              alt="truck_cargo"
            />
            <h4 className="service_details">Road Freight</h4>
          </div>

          <div className="service_details">
            <img className="space" src="/services/air_cargo.jpg" alt="" />
            <h4 className="service_details">Air Freight</h4>
          </div>

          <div className="service_details">
            <img
              className="space "
              src="/services/drone_cargo.jpg"
              alt="drone_parcel"
            />
            <h4 className="service_details">Drone Parcel Delivery</h4>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Services;
