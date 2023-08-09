import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: var(--clr-primary-8);
  .navbar {
    max-width: 90vw;
    margin-left: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .nav__links {
    display: flex;
    padding: 1.5rem;
    .space {
      margin-right: 20px;
    }
  }
  .nav__buttons {
    display: flex;
    flex-direction: row;
    .login {
      margin-right: 20px;
      padding: 5px 20px;
      border-radius: 10px;
      border: none;
    }
    .signup {
      padding: 5px 20px;
      border-radius: 10px;
      border: none;
    }
  }
`;
const Navbar = () => {
  return (
    <Wrapper>
      <div className="navbar">
        <div>
          <div>Logo</div>
        </div>

        <div className="nav__links">
          <a className="space">About Us</a>
          <a className="space">Services</a>
          <a className="space">Why Choose Us</a>
        </div>

        <div className="nav__buttons">
          <button className="login">Login</button>
          <button className="signup">sign Up</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
