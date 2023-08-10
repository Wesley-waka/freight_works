import React from "react";
import styled from "styled-components";

const Footer = () => {
  const Wrapper = styled.div`
    /* -------------------------------------- */
    /* CONTACT FORM */
    /* -------------------------------------- */

    // footer {
    padding: 2.5rem;
    background-color: #333;
    color: #e6e6e6;
    font-size: 80%;
    // }
    .footer-nav {
      text-decoration: none;
      list-style: none;
      float: left;
    }

    .social-icons {
      list-style: none;
      float: right;
    }

    .footer-nav li,
    .social-icons li {
      display: inline-block;
      margin-right: 20px;
    }

    .footer-nav li:last-child,
    .social-icons li:last-child {
      margin-right: 0;
    }

    .footer-nav li a:link,
    .footer-nav li a:visited,
    .social-icons li a:link,
    .social-icons li a:visited {
      text-decoration: none;
      border-bottom: 0;
      color: #888;
      -webkit-transition: color 0.2s;
      transition: color 0.2s;
    }

    .footer-nav li a:hover,
    .footer-nav li a:active,
    .social-icons li a:hover,
    .social-icons li a:active {
      text-decoration: none;
      border-bottom: 0;
      color: #ddd;
    }

    .social-icons li a:visited,
    .social-icons li a:link {
      font-size: 150%;
    }

    .ion-social-facebook,
    .ion-social-twitter,
    .ion-social-googleplus,
    .ion-social-instagram {
      -webkit-transition: color 0.2s;
      transition: color 0.2s;
    }

    .ion-social-facebook:hover {
      color: #3b5998;
    }

    .ion-social-instagram:hover {
      color: #517fa4;
    }

    .ion-social-twitter:hover {
      color: #00aced;
    }

    .ion-social-googleplus:hover {
      color: #dd4b39;
    }

    footer p {
      margin-top: 20px;
      color: #888;
      text-align: center;
    }
  `;

  const Col = styled.div`
    display: block;
    float: left;
    margin: 1% 0 1% 1.6%;
    width: 32.26%;
  `;
  return (
    <Wrapper>
      <div className="row">
        <Col>
          <ul className="footer-nav">
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
            <li>
              <a href="#">iOS</a>
            </li>
            <li>
              <a href="#">Android</a>
            </li>
          </ul>
        </Col>
        <Col>
          <ul className="social-icons">
            <li>
              <a href="#">
                <i className="ion-social-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="ion-social-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="ion-social-googleplus"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="ion-social-instagram"></i>
              </a>
            </li>
          </ul>
        </Col>
      </div>
      <div className="row">
        <p>Copyright &copy; 2015 by Omnifood. All rights reserved.</p>
      </div>
    </Wrapper>
  );
};

export default Footer;
