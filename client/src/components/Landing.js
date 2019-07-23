import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";

const Landing = () => {
  return (
    <Fragment>
      <section className="landing-intro">
        <Container>
          <Row className="intro-row">
            <Col xs="6" className="intro-text">
              <h1 className="mb-4">BlockchainJS</h1>
              <h5 className="mb-5">
                A Javascript blockchain implementation that allows you to send,
                receive, store and mine the fictional Jaycoin currency for
                educational purposes
              </h5>
              <div>
                <button className="getWalletbtn">Get a Free Wallet</button>
              </div>
            </Col>
            <Col xs="6">
              <img
                src="https://res.cloudinary.com/toreckk/image/upload/v1563817211/getstarted2x.webp"
                class="webpImg"
                alt="Blockchain intro"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section
        style={{ backgroundColor: "#111D33", color: "#FFF" }}
        className="pt-3 pb-3"
      >
        <Container className="landing-stats">
          <div className="landing-stat">
            <h2>20</h2>
            <h5>Blocks</h5>
          </div>
          <div className="landing-stat">
            <h2>300</h2>
            <h5>Transactions</h5>
          </div>
          <div className="landing-stat">
            <h2>5</h2>
            <h5>Wallets</h5>
          </div>
          <div className="landing-stat">
            <h2>10,000</h2>
            <h5>Coins</h5>
          </div>
        </Container>
      </section>
      <section className="landing-mid">
        <Container>
          <Row>
            <Col xs="6">
              <h1>Objective</h1>
              <p>
                The objective of this project is to learn how a blockchain is
                built and how it works.
              </p>
            </Col>
            <Col xs="6">.col-6</Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default Landing;
