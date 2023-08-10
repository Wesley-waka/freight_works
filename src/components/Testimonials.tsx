import React from "react";
import styled from "styled-components";

const Testimonials = () => {
  const Wrapper = styled.section`
    background-image: -webkit-linear-gradient(
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),
      url(/hero_1.jpg);
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
      url(/hero.jpg);
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    color: white;
  `;

  const Row = styled.div`
    max-width: 80vw;
    max-height: 70vh;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
  `;

  const Header = styled.div`
    max-width: 90vw;
    margin: 0 auto;
    text-align: center;
    padding-top: 2rem;
  `;
  const Col = styled.div`
    display: block;
    float: left;
    margin: 1% 0 1% 1.6%;
    width: 32.26%;
  `;

  const Block = styled.blockquote`
    padding: 2%;
    font-style: italic;
    line-height: 145%;
    position: relative;
    margin-top: 40px;

    &::before {
      content: "\201C";
      font-size: 500%;
      display: block;
      position: absolute;
      top: -5px;
      left: -5px;
    }
  `;

  const Cite = styled.cite`
    font-size: 90%;
    margin-top: 25px;
    display: block;
  `;

  const Image = styled.img`
    height: 45px;
    border-radius: 50%;
    margin-right: 10px;
    vertical-align: middle;
  `;
  return (
    <Wrapper>
      {/* <section className="section-testimonials"> */}
      <Header>
        <h2>Our customers can't live without us</h2>
      </Header>
      <Row>
        <Col>
          <Block>
            omnifood is just awesome! I just launched a startup which leaves me
            with no time for cooking, so Omnifood is a life-saver. Now that I
            got used to it, I couldn't live without my daily meals!
            <Cite>
              <Image src="/customers/customer-1.jpg" alt="Customer 1 Photo" />
              Alberto Duncan,<i>PUMA CTO</i>
            </Cite>
          </Block>
        </Col>
        <Col>
          <Block>
            Inexpensive, healthy and great-tasting meals, delivered right to my
            home. We have lots of food delivery here in Lisbon, but no one comes
            even close to Omifood. Me and my family are so in love!
            <Cite>
              <Image src="/customers/customer-2.jpg" alt="Customer 2 Photo" />
              Joana Silva,<i>SONY CEO</i>
            </Cite>
          </Block>
        </Col>
        <Col>
          <Block>
            I was looking for a quick and easy food delivery service in San
            Franciso. I tried a lot of them and ended up with Omnifood. Best
            food delivery service in the Bay Area. Keep up the great work!
            <Cite>
              <Image src="/customers/customer-3.jpg" alt="Customer 3 Photo" />
              Milton Chapman,<i>Plaid CEO</i>
            </Cite>
          </Block>
        </Col>
      </Row>
      {/* </section> */}
    </Wrapper>
  );
};

export default Testimonials;
