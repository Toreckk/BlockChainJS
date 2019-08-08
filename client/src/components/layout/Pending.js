import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { Container, Table } from "reactstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FaPiedPiperHat } from "react-icons/fa";
import moment from "moment";

import { getPendingTransactions } from "../../actions/blockchain";
import { logout } from "../../actions/auth";

const Pending = ({
  getPendingTransactions,
  blockchain: { pendingTransactions, loading },
  logout
}) => {
  useEffect(() => {
    getPendingTransactions();
  }, []);

  let pendingTx = pendingTransactions.map((tx, i) => {
    return (
      <tr>
        <th style={{ width: "3%" }} scope="row">
          {i}
        </th>
        <td
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis"
          }}
        >
          {tx.Hash}
        </td>
        <td
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis"
          }}
        >
          {tx.fromAddress}
        </td>
        <td
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis"
          }}
        >
          {tx.toAddress}
        </td>
        <td>{tx.amount}</td>
        <td>{moment(tx.timestamp).format("DD/MM/YYYY HH:mm:ss")}</td>
      </tr>
    );
  });

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
          <Link
            to="/"
            onClick={logout}
            className="registerBtns registerToLoginbtn"
          >
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
        <button
          style={{
            fontWeight: "600",
            textAlign: "center",
            color: "white",
            backgroundColor: "rgb(12, 108, 242)",
            borderRadius: "4px",
            padding: "0.5rem 2rem",
            border: "none"
          }}
          className="mb-3"
        >
          Mine!
        </button>
        <Table
          style={{
            width: "100%",
            tableLayout: "fixed"
          }}
        >
          <thead>
            <tr>
              <th style={{ width: "3%" }}>#</th>
              <th>Hash</th>
              <th>From</th>
              <th>To</th>
              <th>Amount</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {pendingTx === undefined || pendingTx.length === 0 ? (
              <Fragment />
            ) : (
              pendingTx
            )}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

Pending.propTypes = {
  logout: PropTypes.func.isRequired,
  getPendingTransactions: PropTypes.func.isRequired,
  blockchain: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  blockchain: state.blockchain
});

export default connect(
  mapStateToProps,
  { getPendingTransactions, logout }
)(Pending);
