import React from "react";
import Navbar from "./Navbar";
import { Footer } from ".";
import styled from "styled-components";

const AboutHero = () => {
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
    h1 {
      text-align: center;
      margin: 0 auto;
      padding-top: 4rem;
    }
    h6 {
      text-align: center;
      //   max-width: 50vw;
      padding: 1rem 4rem;
      margin: 0rem 3rem;
    }
  `;
  const Story = styled.section`
    padding: 0rem 2rem;
    height: 60vh;
    display: flex;
    padding-left: 2rem;
    justify-content: space-between;
    flex-direction: row;
    img {
      height: 20rem;
      width: 22rem;
    }
    p {
      padding-left: 2rem;
      line-height: 1.5rem;
      text-align: left;
    }
    button {
      background-color: var(--clr-primary-3);
      padding: 5px 20px;
      border-radius: 10px;
      border: none;
      margin-top: 1.5rem;
      color: white;
      //   margin-left: 7rem;
      //   margin-bottom: 5rem;
      display: inline-block;
      // padding-bottom: 3rem;
    }
  `;

  const Header = styled.h1`
    padding: 1rem 0rem;
    margin: 0 auto;
    text-align: center;
  `;
  return (
    <div>
      <Navbar />
      <Wrapper>
        <h1>About Us</h1>
        <h6>
          With a team of passionate professionals and experts in the fields of
          logistics and technology, FreightsWorks brings a wealth of experience
          to the cargo tracking industry. We are driven by a shared commitment
          to innovation, transparency, and customer satisfaction. Our diverse
          backgrounds and skillsets enable us to create a comprehensive platform
          that meets the unique needs of our clients, whether they are small
          businesses or global enterprises.
        </h6>
      </Wrapper>
      <Header>Our Story</Header>
      <Story>
        <img src="/hero.jpg" alt="" />
        <p>
          At freightWorks, our clients are at the heart of everything we do. We
          prioritize building strong and lasting relationships by listening to
          our clients' feedback and understanding their needs. This
          customer-centric approach guides us in delivering personalized
          solutions that cater to specific requirements and help businesses
          thrive in an ever-evolving market. Our success is measured by the
          success of our clients, and we take pride in being a trusted partner
          on their journey to growth.
          <button>Get Started</button>
        </p>
      </Story>
      <Footer />
    </div>
  );
};

export default AboutHero;
