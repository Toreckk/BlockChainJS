import React, { Container } from "react";
import {
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col
} from "reactstrap";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import { FaPiedPiperHat } from "react-icons/fa";
import SendModal from "./SendModal";
import "react-tabs/style/react-tabs.css";

const DashboardCard = props => {
  return (
    <Card className="dashboard-card shadow" text-center>
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
            <Tab className="tab-s">Mined</Tab>
          </TabList>

          <TabPanel>
            <h2>Sent!</h2>
          </TabPanel>
          <TabPanel>
            <h2>Received!</h2>
          </TabPanel>
          <TabPanel>
            <h2>Mined!</h2>
          </TabPanel>
        </Tabs>
      </div>
    </Card>
  );
};

export default DashboardCard;