import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import FeatureCard from "./FeatureCard";
import { Link } from "react-router-dom";
import AppNavbar from "./AppNavbar";

const Landing = () => {
  return (
    <Fragment>
      <AppNavbar />
      <section className="landing-intro">
        <Container>
          <Row className="intro-row">
            <Col xs="5" className="intro-text">
              <h1 className="mb-4">BlockchainJS</h1>
              <h5 className="mb-5">
                A Javascript blockchain implementation that allows you to send,
                receive, store and mine the fictional Jaycoin currency for
                educational purposes
              </h5>
              <Link
                to="/register"
                className="getWalletbtn d-flex align-items-center justify-content-center"
              >
                Get a Wallet
              </Link>
            </Col>
            <Col xs="7">
              <img
                src="https://res.cloudinary.com/toreckk/image/upload/v1563817211/getstarted2x.webp"
                className="webpImg"
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
          <div className="landing-stats">
            <h2>10,000</h2>
            <h5>Coins</h5>
          </div>
        </Container>
      </section>
      <section className="mt-5">
        <Container className="landing-learn d-flex justify-content-center">
          <h1 className="font-weight-bold mb-5">How to use Jaycoins</h1>
          <Row>
            <Col sm="12" md="4">
              <FeatureCard
                imgsrc="https://res.cloudinary.com/toreckk/image/upload/v1563914503/BlockchainJS/Path/wallet.webp"
                title="Wallet"
                text="Create a wallet and start using Jaycoins"
              />
            </Col>
            <Col sm="12" md="4">
              <FeatureCard
                imgsrc="https://res.cloudinary.com/toreckk/image/upload/v1563914503/BlockchainJS/Path/pool.webp"
                title="Mine"
                text="Verify transactions and start earning Jaycoins"
              />
            </Col>
            <Col sm="12" md="4">
              <FeatureCard
                imgsrc="https://res.cloudinary.com/toreckk/image/upload/v1563914502/BlockchainJS/Path/get-started-buy_sell.png"
                title="Transactions"
                text="Start sending and receiving Jaycoins"
              />
            </Col>
            <Col sm="12" md="4">
              <FeatureCard
                imgsrc="https://res.cloudinary.com/toreckk/image/upload/v1563922291/BlockchainJS/Path/ledger.webp"
                title="Explorer"
                text="Search for blocks or transactions in the blockchain"
              />
            </Col>

            <Col sm="12" md="4">
              <FeatureCard
                imgsrc="https://res.cloudinary.com/toreckk/image/upload/v1563914502/BlockchainJS/Path/faq.png"
                title="FAQ"
                text="Learn how this blockchain was implemented"
              />
            </Col>

            <Col sm="12" md="4">
              <FeatureCard
                imgsrc="https://res.cloudinary.com/toreckk/image/upload/v1563914502/BlockchainJS/Path/get-started-meet_our_company.png"
                title="Community"
                text="Join the bigger blockchain community"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section
        style={{ backgroundColor: "#111D33", color: "#FFF", fontSize: "40px" }}
        className="pt-5 pb-4 d-flex align-items-center flex-column"
      >
        <h1 className="mb-5">Need help with anything else?</h1>
        <div d-flex justify-content-center>
          <button className="getWalletbtn">Read the Wiki</button>
          <button className="getWalletbtn ml-5">Contact us</button>
        </div>
      </section>
    </Fragment>
  );
};

export default Landing;
