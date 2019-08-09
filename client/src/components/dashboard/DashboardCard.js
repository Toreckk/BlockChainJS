import React, { Container } from "react";
import { Card, Table } from "reactstrap";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import moment from "moment";

import "react-tabs/style/react-tabs.css";

const DashboardCard = props => {
  let txTables = Tx => {
    return (
      <Table
        className="table-striped table-hover"
        style={{
          width: "100%",
          tableLayout: "fixed"
        }}
      >
        <thead>
          <tr>
            <th style={{ width: "5%" }}>#</th>
            <th>Hash</th>
            <th>From</th>
            <th>To</th>
            <th>Amount</th>
            <th>Timestamp</th>
          </tr>
        </thead>

        <tbody>
          {Tx.map((tx, i) => {
            return (
              <tr>
                <th style={{ width: "5%", fontWeight: "300" }} scope="row">
                  {i}
                </th>
                <td>
                  <div
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      maxHeight: "1.5rem"
                    }}
                  >
                    {tx.Hash}
                  </div>
                </td>
                <td>
                  <div
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      maxHeight: "1.5rem"
                    }}
                  >
                    {tx.fromAddress === null ? <p>System</p> : tx.fromAddress}
                  </div>
                </td>
                <td>
                  <div
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      maxHeight: "1.5rem"
                    }}
                  >
                    {tx.toAddress}
                  </div>
                </td>
                <td>{tx.amount}</td>
                <td>{moment(tx.timestamp).format("DD/MM/YYYY HH:mm:ss")}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  };

  return (
    <Card className="dashboard-card shadow">
      <div
        className="balance-card-title d-flex justify-content-start"
        syle={{ fontWeight: "500", color: "#494949" }}
      >
        RECENT ACTIVITY
      </div>
      <div
        className="recent-activity-card d-flex flex-direction-row align-content-around"
        style={{ minHeight: "500px" }}
      >
        <Tabs className="tabs">
          <TabList className="tab-list">
            <Tab className="tab-s">Sent</Tab>
            <Tab className="tab-s">Received</Tab>
            <Tab className="tab-s">Pending</Tab>
            <Tab className="tab-s">Mined</Tab>
          </TabList>

          <TabPanel className="tab-p">
            {txTables(props.profile.sentTxs)}
          </TabPanel>
          <TabPanel className="tab-p">
            {txTables(props.profile.receivedTxs)}
          </TabPanel>
          <TabPanel className="tab-p">
            {txTables(props.profile.pendingTxs)}
          </TabPanel>
          <TabPanel className="tab-p">
            <h2>Mined!</h2>
          </TabPanel>
        </Tabs>
      </div>
    </Card>
  );
};

export default DashboardCard;
