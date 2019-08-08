import React, { useEffect } from "react";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FaPiedPiperHat } from "react-icons/fa";

import { getPendingTransactions } from "../../actions/transactions";

const Pending = ({ getPendingTransactions, transactions }) => {
  useEffect(() => {
    getPendingTransactions();
    console.log(typeof pendingTransactions);
    console.log(JSON.stringify(transactions));
  }, []);

  return (
    <div
      className="d-flex flex-column"
      style={{ backgroundColor: "#F5F5F5", height: "100vh" }}
    >
      <div className="autheader">
        <Link className="logoName registerBtns d-flex" to="/">
          <FaPiedPiperHat className="JaycoinIcon" size="1.5em" />
          <p className="d-xs-none mt-3" />
          Jaycoin
        </Link>
        <div className="d-flex flex-row align-items-center">
          <Link to="/" className="registerBtns registerToLoginbtn">
            Logout
          </Link>
        </div>
      </div>
      <Container className="mt-4">
        <h1>Pending Transactions</h1>
        <p>
          These transactions are waiting to be included in the next block. Next
          block is created when you start the mining process.
        </p>
      </Container>
    </div>
  );
};

const mapStateToProps = state => ({
  transactions: state.transactions
});

export default connect(
  mapStateToProps,
  { getPendingTransactions }
)(Pending);
