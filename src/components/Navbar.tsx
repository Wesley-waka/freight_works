import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: var(--clr-primary-8);
  display: flex;
  justify-content: space-around;
  align-items: center;
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
    }
  }
`;
const Navbar = () => {
  return (
    <Wrapper>
      <div>
        <div>Logo</div>
      </div>

      <div className="nav__links">
        <a className="space">Services</a>
        <a className="space">About Us</a>
        <a className="space">Why Choose Us</a>
      </div>

      <div className="nav__buttons">
        <div>
          <button className="login">Login</button>
        </div>
        <div>
          <button>sign Up</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
