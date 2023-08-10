import React from "react";
import styled from "styled-components";

const Form = () => {
  const Wrapper = styled.section`
    padding: 5rem 0;
    max-height: 60vw;
    background-image: linear-gradient(
      to right bottom,
      var(--clr-primary-1),
      var(--clr-primary-2)
    );

    // only works for safari and chrome
    .book {
      max-width: 80vw;
      padding: 2rem;
      margin-left: 6rem;
      background-image: linear-gradient(
          105deg,
          rgba(255, 255, 255, 0.9) 0%,
          rgba(255, 255, 255, 0.9) 50%,
          transparent 50%
        ),
        url(/hero_1.jpg);
      background-size: 100%;
      border-radius: 3px;
      box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.5);
    }

    .heading-secondary {
      margin: 0 auto;
      text-align: left;
      padding-bottom: 1rem;
    }
    .form {
      // margin-left: 10rem;
      &__group:not(:last-child) {
        margin-bottom: 2rem;
      }

      &__input {
        font-size: 1.5rem;
        font-family: inherit;
        color: inherit;
        padding: 0.5rem 2rem;
        border-radius: 2px;
        background-color: rgba($color-white, 0.5);
        border: none;
        border-bottom: 3px solid transparent;
        width: 40%;
        display: block;
        transition: all 0.3s;

        @include respond(tab-port) {
          width: 100%;
        }

        &:focus {
          outline: none;
          box-shadow: 0 1rem 2rem rgba($color-black, 0.1);
          border-bottom: 3px solid $color-primary;
        }

        &:focus:invalid {
          border-bottom: 3px solid $color-secondary-dark;
        }

        &::-webkit-input-placeholder {
          color: $color-grey-dark-2;
        }
      }

      &__label {
        font-size: 1.2rem;
        font-weight: 700;
        margin-left: 2rem;
        margin-top: 0.7rem;
        display: block;
        transition: all 0.3s;
      }

      &__input:placeholder-shown + &__label {
        opacity: 0;
        visibility: hidden;
        transform: translateY(-4rem);
      }
    }
  `;
  return (
    <Wrapper>
      <div className="row">
        <div className="book">
          <div className="book__form">
            <div className="u-margin-bottom-medium">
              <h2 className="heading-secondary">Start booking now</h2>
            </div>

            <form action="#" className="form">
              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Full Name"
                  id="name"
                  required
                />
                <label className="form__label">Full Name</label>
              </div>

              <div className="form__group">
                <input
                  type="email"
                  className="form__input"
                  placeholder="Email address"
                  id="email"
                  required
                />
                <label className="form__label">Email address</label>
              </div>

              {/* <div className="form__group u-margin-bottom-medium ">
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="small"
                    name="size"
                  />
                  <label className="form__radio-label">
                    <span className="form__radio-button"></span>
                    Small Tour Group
                  </label>
                </div>

                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="large"
                    name="size"
                  />
                  <label className="form__radio-label">
                    <span className="form__radio-button"></span>
                    Large Tour Group
                  </label>
                </div>
              </div> */}

              <div className="form__group">
                <button className="btn btn--green">Next step &rarr;</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Form;
